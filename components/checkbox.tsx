import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type Props = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  labelText: string;
};

export const Checkbox: React.FC<Props> = ({ checked, onChange, className, labelText }) => {
  return (
    <label>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <Text>{labelText}</Text>
    </label>
  );
};

const Text = styled.span`
  margin-left: 8px;
  font-size: 0.7em;
  font-weight: 50;
  color: rgba(0, 124, 0, 1);
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: -7px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #007c00;
  stroke-width: 2px;
  width: 12px;
  hight: 12px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

type StyledProps = {
  checked: boolean;
};

const StyledCheckbox = styled.div<StyledProps>`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px #007c00;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    vertical-align: 5px;
  }
`;
