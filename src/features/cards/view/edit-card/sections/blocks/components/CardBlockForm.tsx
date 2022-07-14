/* eslint-disable react/jsx-props-no-spreading,import/no-cycle */
import React from 'react';

import { Text } from '@components/typography/text';

import type { BlockTypes } from '../api/getCardBlocks';
import type { BlockFormInputsProps } from './CardBlockFormSkeleton';
import { ExternalLinkBlockForm } from './ExternalLinkBlockForm';
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
      return <Text>TODO</Text>;
    case 'download':
      return <Text>TODO</Text>;
    default:
      return <Text color="negative">Erro - bloco inválido</Text>;
  }
};
