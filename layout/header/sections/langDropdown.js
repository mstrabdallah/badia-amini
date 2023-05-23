import { Dropdown, Menu } from 'antd';
const menu = (
    <Menu
        items={[
            {
                label: 'اللغة العربيه',
                key: '3',
            },
        ]}
    />
);

const App = () => (
    <Dropdown overlay={menu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
            <div className="langIcon"></div>
        </a>
    </Dropdown>
);

export default App;