import type { NextApiRequest, NextApiResponse } from 'next';
import * as sgMail from '@sendgrid/mail';
import * as Yup from 'yup';
type Data = {
  message: string;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    console.log('START /contact');
    const { name, email, message } = JSON.parse(req.body);

    // validate incoming body
    if (
      !(await schema.validate(req.body)) ||
      email === process.env.SENDGRID_USER_EMAIL
    ) {
      console.log('Invalid request');
      res.status(400).json({
        message: 'Invalid request',
      });
      return;
    }

    // send email to the user
    console.log('Sending Email');
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_OWNER_EMAIL!,
      templateId: process.env.SENDGRID_CONTACT_REPLY_TEMPLATE_ID!,
      dynamicTemplateData: {
        name,
      },
    });
    console.log('Sent Email');

    // sending email to myself
    console.log('Sending Email');
    await sgMail.send({
      to: process.env.SENDGRID_OWNER_EMAIL!,
      from: process.env.SENDGRID_OWNER2_EMAIL!,
      templateId: process.env.SENDGRID_CONTACT_NOTIFY_TEMPLATE_ID!,
      subject: 'Thanks for contacting me',
      dynamicTemplateData: {
        name,
        message,
      },
    });
    console.log('Sent Email');

    res.status(200).json({ message: 'Email Sent successfully' });
  } catch (error: any) {
    console.log('ERROR /contact', error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  } finally {
    console.log('END /contact');
  }
};

export default handler;
