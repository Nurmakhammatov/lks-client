import Head from 'next/head';
import { description as packageDescription, name } from 'package.json';
import type { FC } from 'react';
import type { MetadataProps } from 'types/components/pages/Metadata';

const Metadata: FC<MetadataProps> = ({
  description = packageDescription,
  title = name
}) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default Metadata;
