import * as React from 'react';
import type { IFluentUiControlsProps } from './IFluentUiControlsProps';
import {ButtonDefaultExample} from '../../../controles/ButtonDefaultExample';
import {ButtonCompoundExample} from '../../../controles/ButtonCompoundExample';
import {ButtonCommandBarExample} from '../../../controles/ButtonCommandBarExample';
import {ButtonSplitExample} from '../../../controles/ButtonSplitExample';
import {ButtonIconExample} from '../../../controles/ButtonIconExample';
import {ButtonIconWithTooltipExample} from '../../../controles/ButtonIconWithTooltipExample';
import {ButtonContextualMenuExample} from '../../../controles/ButtonContextualMenuExample';
import {ButtonActionExample} from '../../../controles/ButtonActionExample';
import {ButtonCommandExample} from '../../../controles/ButtonCommandExample';
import {ButtonAnchorExample} from '../../../controles/ButtonAnchorExample';
import {ButtonSplitCustomExample} from '../../../controles/ButtonSplitCustomExample';
import {ButtonToggleExample} from '../../../controles/ButtonToggleExample';







export default class FluentUiControls extends React.Component<IFluentUiControlsProps, {}> {
  public render(): React.ReactElement<IFluentUiControlsProps> {
    const {
      
    } = this.props;

    return (
    <div>

<div>Controles FluentUI</div>
<hr></hr>
<div>Folha de Testes by Edvaldo Guimaraes</div>
<hr></hr>
<div>Botões</div>
<hr></hr>
<div><a href='https://developer.microsoft.com/en-us/fluentui#/controls/web/button'>Documentação: https://developer.microsoft.com/en-us/fluentui#/controls/web/button</a></div>
<hr></hr>
      <hr></hr>
      <div>ButtonDefaultExample</div>
      
      <hr></hr>
       <div><ButtonDefaultExample></ButtonDefaultExample></div>
      <hr></hr>
      
       <div>ButtonCompoundExample</div>
       <hr></hr>
       <div><ButtonCompoundExample></ButtonCompoundExample></div>
       <hr></hr>
       <div>ButtonCommandBarExample</div>
       <hr></hr>
      <div><ButtonCommandBarExample></ButtonCommandBarExample></div>
      <hr></hr>
      <div>ButtonSplitExample</div>
      <hr></hr>
      <div><ButtonSplitExample></ButtonSplitExample></div>
      <hr></hr>
      <div>ButtonIconExample</div>
      <hr></hr>
      <div><ButtonIconExample></ButtonIconExample></div>
      <hr></hr>
      <div>ButtonIconWithTooltipExample</div>
      <hr></hr>
      <div><ButtonIconWithTooltipExample></ButtonIconWithTooltipExample></div>
      <hr></hr>    
      <div>ButtonContextualMenuExample</div>
      <hr></hr>
      <div><ButtonContextualMenuExample></ButtonContextualMenuExample></div>
      <hr></hr>

      <div>ButtonActionExample</div>
      <hr></hr>
      <div><ButtonActionExample></ButtonActionExample></div>
      <hr></hr>

      <div>ButtonCommandExample</div>
      <hr></hr>
      <div><ButtonCommandExample></ButtonCommandExample></div>
      <hr></hr>

      
      <div>ButtonAnchorExample</div>
      <hr></hr>
      <div><ButtonAnchorExample></ButtonAnchorExample></div>
      <hr></hr>


      <div>ButtonAnchorExample</div>
      <hr></hr>
      <div><ButtonSplitCustomExample></ButtonSplitCustomExample></div>
      <hr></hr>
      
      <div>ButtonToggleExample</div>
      <hr></hr>
      <div><ButtonToggleExample></ButtonToggleExample></div>
      <hr></hr>
      
       </div>
    
    );
  }
}
