import React from 'react';

import Head from 'next/head';

import { MetaTagsProps } from './types';

export const MetaTags: React.FC<MetaTagsProps> = ({
  name,
  title,
  description,
  url,
  type,
  publisher,
  section,
  tag,
  imageURL,
  imageWidth,
  imageHeight,
  twitterCard,
  twitterSite,
}: MetaTagsProps) => {
  return (
    <Head>
      <meta name="google-site-verification" content="_NwCXH-BZqeRMPET3NZQ3PRG4_6GyLNosO0uOBnMyLs" />
      {title && <title>{title}</title>}
      {name && <meta property="og:site_name" content={name} key="name" />}
      {title && <meta property="og:title" content={title} key="title" />}
      {description && <meta property="og:description" content={description} key="description" />}
      {url && <meta property="og:url" content={url} key="url" />}
      {type && <meta property="og:type" content={type} key="type" />}
      {publisher && <meta property="article:publisher" content={publisher} key="publisher" />}
      {section && <meta property="article:section" content={section} key="section" />}
      {tag && <meta property="article:tag" content={tag} key="tag" />}
      <meta property="og:image" content="images/social-media/share-image.png" key="image" />
      {imageURL && <meta property="og:image:secure_url" content={imageURL} key="imageURL" />}
      {imageWidth && <meta property="og:image:width" content={imageWidth} key="imageWidth" />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} key="imageHeight" />}
      {twitterCard && <meta property="twitter:card" content={twitterCard} key="twitterCard" />}
      <meta
        property="twitter:image"
        content="images/social-media/twitter-image.png"
        key="twitterImage"
      />
      {twitterSite && <meta property="twitter:site" content={twitterSite} key="twitterSite" />}
    </Head>
  );
};

export default MetaTags;
