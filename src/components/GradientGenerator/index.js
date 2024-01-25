import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionList,
  ColorsPickerContainer,
  ColorsPickerDescription,
  CustomInputContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    formColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  onGenerate = () => {
    const {formColorInput, toColorInput, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${formColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({formColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeDirection: direction})
  }

  render() {
    const {activeDirection, formColorInput, toColorInput, gradientValue} =
      this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickerDescription>Pick the Colors</ColorsPickerDescription>
          <ColorsPickerContainer>
            <CustomInputContainer>
              <ColorValue>{formColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeFromColor}
                value={formColorInput}
                type="color"
              />
            </CustomInputContainer>
            <CustomInputContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeToColor}
                value={toColorInput}
                type="color"
              />
            </CustomInputContainer>
          </ColorsPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
