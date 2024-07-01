import React from 'react';
import { ContentTypeE } from '@module/types/content';
import { ContentResultT } from '@module/types/content/result';
import {
  ResultLayout,
  GridBox,
  LeftBox,
  RightBox,
  TopBox,
} from '@/app/(pc)/contents/[id]/result/components/Result.styled';
import SajuResult from '@/app/(pc)/contents/[id]/result/components/Saju';
import ContentFooter from '@/app/(pc)/contents/[id]/result/components/Footer';
import TarotResult from '@/app/(pc)/contents/[id]/result/components/Tarot';
import ContentHeader from '@/app/(pc)/contents/[id]/result/components/Saju/Header';
import RecommendContent from '@/app/(pc)/contents/[id]/result/components/RecommendContent';
import TitleNavigation from '@/app/(pc)/contents/[id]/result/components/TitleNavigation';

interface Props {
  data: ContentResultT;
  isShare: boolean;
}

function ContentResult({ data, isShare }: Props) {
  const { content, purchase, parents, saju } = data;

  const renderResult = () => {
    switch (content?.type.name) {
      case ContentTypeE.Saju:
        return <SajuResult parents={parents} saju={saju} />;
      case ContentTypeE.Tarot:
        return <TarotResult parents={parents} purchase={purchase} />;
      default:
        return null;
    }
  };

  const isNavigation = content.category?.id === 10;

  return (
    <ResultLayout>
      <GridBox>
        {content.type.name === ContentTypeE.Saju && (
          <TopBox>
            <ContentHeader purchase={purchase} saju={saju} />
          </TopBox>
        )}
        <LeftBox>
          {renderResult()}

          <ContentFooter
            isShare={isShare}
            content={content}
            purchase={purchase}
          />
        </LeftBox>

        <RightBox>
          {isNavigation && <TitleNavigation parents={parents} />}

          <RecommendContent />
        </RightBox>
      </GridBox>
    </ResultLayout>
  );
}

export default ContentResult;
