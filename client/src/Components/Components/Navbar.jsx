import { AlignLeftOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme } from 'antd';
import NavBarMiddle from './NavBarMiddle';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Navbar = ({username,SelectedPanel}) => {
    function innerChange(num){
        SelectedPanel(num)
    }
    const getItems = (panelStyle) => [
        {
          key: '1',
          label: <NavBarMiddle changeWindow={innerChange} username={username}></NavBarMiddle>,
          children: <p>{text}</p>,
          style: panelStyle,
        }
      ];
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 0,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <Collapse
    collapsible='icon'
    
      bordered={false}
      defaultActiveKey={['2']}
      expandIcon={({ isActive }) => <AlignLeftOutlined/>}
      style={{
        background: token.colorBgContainer,
        
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default Navbar;