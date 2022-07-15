/* eslint-disable react/jsx-props-no-spreading,import/no-cycle */
import React from 'react';

import { Text } from '@components/typography/text';

import type { BlockTypes } from '../api/getCardBlocks';
import type { BlockFormInputsProps } from './CardBlockFormSkeleton';
import { DownloadBlockForm } from './DownloadBlockForm';
import { ExternalLinkBlockForm } from './ExternalLinkBlockForm';
import { ImageBlockForm } from './ImageBlockForm';
import { VideoBlockForm } from './VideoBlockForm';

export const CardBlockFormByType = ({
  managingBlock,
  ...blockFormProps
}: BlockFormInputsProps<BlockTypes>) => {
  switch (managingBlock.type) {
    case 'video':
      return (
        <VideoBlockForm managingBlock={managingBlock} {...blockFormProps} />
      );
    case 'external-link':
      return (
        <ExternalLinkBlockForm
          managingBlock={managingBlock}
          {...blockFormProps}
        />
      );
    case 'image':
      return (
        <ImageBlockForm managingBlock={managingBlock} {...blockFormProps} />
      );
    case 'download':
      return (
        <DownloadBlockForm managingBlock={managingBlock} {...blockFormProps} />
      );
    default:
      return <Text color="negative">Erro - bloco inválido</Text>;
  }
};
