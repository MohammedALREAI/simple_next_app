// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import NextCors from "nextjs-cors";

type Data = {
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  try {
    const {url} = req.body;

    console.log("url=====>>>>>>>", url);
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    var requestOptions = {
      method: "POST",
      body: url,
    };

    const responseData = await fetch(
      `http://aiph.me:8000/api/${url}`,
      requestOptions
    );

    const dataToJson = await responseData.json();

    res.status(200).json({dataToJson: dataToJson});
  } catch (error) {
    console.log("error", error);
  }
}
