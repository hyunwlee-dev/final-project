import React from 'react';
import styled from 'styled-components';
import theme from 'style/theme';

const Card = styled.div`
  width: 59.438rem;
  display: flex;
  position: relative;
  padding: 4.125rem 0rem;
  border-bottom: #f1f1f1 solid 0.188rem;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  background: #d9d9d9;
  border-radius: ${theme.spacingMd};
`;

const Body = styled.div`
  padding-left: 3.75rem;
  font-family: 'Inter';
  font-style: normal;
`;

const Name = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #${theme.blue};
`;

const Description = styled.p`
  margin-top: 1.688rem;
  font-weight: 600;
  font-size: ${theme.spacingMd};
  line-height: 1.625rem;
`;

const Notice = styled.p`
  margin-top: 1.813rem;
  font-weight: 400;
  font-size: ${theme.spacingBase};
  line-height: 1.625rem;
  width: 21.188rem;
  color: ${theme.gray};
`;

const AddInfoSite = styled.a`
  margin-top: 4.313rem;
  color: #${theme.blue};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: ${theme.textMd};
  display: block;
  text-decoration: underline #7884d8;
`;

const Price = styled.span`
  font-size: ${theme.spacingMd};
  font-weight: 700;
  position: absolute;
  bottom: 4.125rem;
  right: 0rem;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #444444;
`;

const IsCheck = styled.span`
  position: absolute;
  top: 4.125rem;
  right: 0rem;
  width: 3.75rem;
  height: 3.75rem;
  border: 0.125rem solid #d5d5d5;
  border-radius: 0.625rem;
  background: url(${require('./../assets/icons/checked.png')}) no-repeat center
    center;
`;

const RoomInfoCard = ({
  name,
  description,
  notice,
  addInfoSite,
  price,
  imageUrl,
}) => {
  return (
    <Card>
      <Image src={imageUrl} alt={name} />
      <Body>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Notice>{notice}</Notice>
        <AddInfoSite href="">{addInfoSite}</AddInfoSite>
        <Price>${price}</Price>
        <IsCheck></IsCheck>
      </Body>
    </Card>
  );
};

export default RoomInfoCard;
