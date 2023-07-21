import sendgridClient from '@sendgrid/client';
import type { NextApiRequest, NextApiResponse } from 'next';

sendgridClient.setApiKey(process.env.SENDGRID_API_KEY_SUBSCRIPTION);

const Contact = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'PUT') {
    const { email, name, organization, role, interview } = req.body;

    const data = {
      list_ids: ['8d7fd667-65bc-422a-ab83-6f039a358f58'],
      contacts: [
        {
          email,
          unique_name: name,
          custom_fields: { e6_T: organization, e7_T: role, e8_T: interview },
        },
      ],
    };

    const request = {
      url: `/v3/marketing/contacts`,
      method: 'PUT' as const,
      body: data,
    };

    sendgridClient.request(request).then(
      () => {
        res.status(200).json({ status: 'success' });
      },
      (error) => {
        if (error.response) {
          res.status(400).json(error.response.body);
        }
      }
    );
  } else {
    res.status(404).send(null);
  }
};

export default Contact;
