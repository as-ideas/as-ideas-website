import React from 'react';

import './Terminal.scss'

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: false,
            history: [
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
            ],
            inputText: 'bewerbung abschicken'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.focus = this.focus.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.focus();
    }

    handleInputChange(e) {
        let text = e.target.value;
        this.setState({
            inputText: text
        })
    }

    focus() {
        let el = this.terminal;
        this.terminal.focus();

        if (typeof el.selectionStart == "number") {
            el.selectionStart = el.selectionEnd = el.value.length;
        } else if (typeof el.createTextRange != "undefined") {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
        }
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            let history = this.state.history;
            history.push(this.state.inputText);
            this.handleCommand(this.state.inputText);

            this.setState({
                history,
                inputText: ''
            })

        }
    }

    handleCommand(command) {
        switch (command) {
            case 'bewerbung abschicken':
                this.openAppyPage();
                break;
        }
    }

    openAppyPage() {
        setTimeout(() => {
            window.location.href = this.props.url;
        }, 1000)
    }

    render() {
        return (
            <div className='terminal' onClick={this.focus}>
                <div className='terminal__history'>
                    {
                        this.state.history.map(msg => <p key={msg.replace(' ', '')}>{'bewerber@ideas:~$: ' + msg}</p>)
                    }
                </div>
                <div className='terminal__form'>
                    <p>bewerber@ideas:~$:</p>
                    <input type="text" spellCheck="false" onKeyPress={this.handleKeyPress} value={this.state.inputText} onChange={this.handleInputChange} ref={terminal => { this.terminal = terminal; }} />
                </div>


            </div>
        );
    };
}

export default Terminal;