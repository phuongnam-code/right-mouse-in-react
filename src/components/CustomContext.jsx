import React from 'react';

class CustomContext extends React.Component {
    constructor(props) {
        super(props);

        this.contextMenuRef = React.createRef();
        this.renderMenu = this.renderMenu.bind(this);

        this.state = {
            showMenu: false,
            x: 0,
            y: 0
        };
    }

    componentDidMount = () => {
        document.addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount = () => {
        document.removeEventListener("click", this.handleClick);
        document.removeEventListener("contextmenu", this.handleContextMenu);
    }

    handleContextMenu = (event) => {
        event.preventDefault();
        this.setState({
            showMenu: true,
            x: event.clientX,
            y: event.clientY
        });
    }

    handleClick = (event) => {
        if (this.contextMenuRef.current?.id === 'customcontext') {
            let index = event.target.getAttribute('index');
            if (index !== -1 && this.props.menuList[index]) {
                this.props.menuList[index].callback();
            }
        }
        this.setState({ showMenu: false });
    }

    renderMenu = (menuList) => {
        var styleMenu = {
            position: 'absolute',
            top: `${this.state.y}px`,
            left: `${this.state.x + 5}px`
        }

        return (
            <div ref={this.contextMenuRef} className='custom-context' id='customcontext' style={styleMenu}>
                {menuList.map((item, index, arr) => (
                    <div key={index} className='custom-context-item' index={index}>{item.label}</div>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div id='menu'>
                {this.state.showMenu ? this.renderMenu(this.props.menuList) : null}
            </div>
        )
    }
}

export default CustomContext