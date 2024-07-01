import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { numberWithCommas } from '@module/utils/number';
import {
  CloseButton,
  FormDescription,
  InfoContentName,
  InfoContentPrice,
  InfoDescription,
  InfoLogo,
  InfoTitle,
  InputFormLayout,
  PriceContainer,
  InfoContentOldPrice,
  InfoContentDiscountPriceWrap,
  InfoContentDiscountPrice,
  InfoContentDiscountPercent,
} from '@/app/(pc)/contents/[id]/payments/components/Form/InputForm/styled';
import FormButton from '../Button';
import UserForm from '@/app/(pc)/components/Form/UserForm';
import { InputFormProps } from '@/app/(pc)/contents/[id]/payments/components/Form/InputForm/types';

function InputForm({ content, handleFormSubmit }: InputFormProps) {
  const router = useRouter();
  const {
    control,
    formState: { isValid },
  } = useFormContext();

  return (
    <InputFormLayout>
      <CloseButton onClick={() => router.replace(`/contents/${content.id}`)}>
        닫기
      </CloseButton>
      <InfoTitle>결제하기</InfoTitle>
      <InfoLogo>
        <Image
          src="/pc/common/logo_black.webp"
          alt="스포츠경향"
          width={237}
          height={52}
        />
        <span>운세</span>
      </InfoLogo>
      <InfoContentName>{content.name}</InfoContentName>
      {/* <InfoContentPrice>{numberWithCommas(content.price)}원</InfoContentPrice> */}
      {content.is_discount ? (
        <PriceContainer>
          <InfoContentOldPrice>
            {numberWithCommas(content.price)}원
          </InfoContentOldPrice>
          <InfoContentDiscountPriceWrap>
            <InfoContentDiscountPrice>
              {numberWithCommas(content.discount_price)}원
            </InfoContentDiscountPrice>
            <InfoContentDiscountPercent>
              {content.discount_percent}% 할인!
            </InfoContentDiscountPercent>
          </InfoContentDiscountPriceWrap>
          <InfoDescription>자세한 풀이 내용을 확인하세요.</InfoDescription>
        </PriceContainer>
      ) : (
        <>
          <InfoContentPrice>
            {numberWithCommas(content.price)}원
          </InfoContentPrice>
          <InfoDescription>자세한 풀이 내용을 확인하세요.</InfoDescription>
        </>
      )}

      <UserForm control={control} />

      <FormDescription>
        * 다시보기를 위해 정확한 정보를 입력해주세요.
      </FormDescription>

      <FormButton
        type="submit"
        isValid={isValid}
        text="결과 자세히 보기"
        onClick={() => handleFormSubmit()}
      />
    </InputFormLayout>
  );
}

export default InputForm;
