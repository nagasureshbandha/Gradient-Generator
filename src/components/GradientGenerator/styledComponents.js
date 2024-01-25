// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const DirectionsDescription = styled.p`
  color: #fff;
  font-size: 22px;
  font-family: 'Roboto';
  line-height: 1.5;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorsPickerDescription = styled.p`
  color: #ededed;
  font-size: 22px;
  font-family: 'Roboto';
  line-height: 1.5;
  font-weight: 500;
`

export const ColorsPickerContainer = styled.div`
  display: flex;
  max-width: 325px;
  flex-direction: space-around;
`

export const CustomInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ColorValue = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #00c9b7;
  min-width: 25px;
  border: none;
  border-radius: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 15px;
  margin-right: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
