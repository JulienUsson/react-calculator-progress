import React from 'react'
import { withStyles } from '@material-ui/core'
import classnames from 'classnames'

const keys = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  '+',
  '-',
  '/',
  'x',
  '=',
]

const styles = theme => ({
  container: {
    display: 'flex',
    margin: 16,
  },
  calculator: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey[500],
    padding: 8,
    borderRadius: 8,
    boxShadow: `0px 8px 0px ${
      theme.palette.grey[700]
    }, 0px 3px 15px rgba(0,0,0,.4)`,
  },
  screen: {
    height: 32,
    marginBottom: 8,
    padding: 8,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.grey[100],
    borderRadius: 8,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    fontSize: 24,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    boxShadow: `0px -2px 0px ${
      theme.palette.grey[900]
    }, 0px 3px 15px rgba(0,0,0,.4)`,
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
  },
  key: {
    margin: 4,
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    fontSize: 24,
    borderRadius: 5,
    color: theme.palette.grey[900],
    backgroundColor: theme.palette.grey[300],
    boxShadow: `0px 4px 0px ${
      theme.palette.grey[700]
    }, 0px 3px 15px rgba(0,0,0,.4)`,
    transition: 'box-shadow 100ms ease-in-out, transform 100ms ease-in-out',
  },
  pressedKey: {
    boxShadow: `0px 1px 0px ${
      theme.palette.grey[700]
    }, 0px 3px 15px rgba(0,0,0,.4)`,
    transform: 'translate(0, 3px)',
  },
})

const generateRandomNumber = () => Math.floor(Math.random() * 999999999) + 1

const pickRandomKey = () => keys[Math.floor(Math.random() * keys.length)]

const CalculatorProgress = class extends React.Component {
  state = {
    value: generateRandomNumber(),
    pressedKey: pickRandomKey(),
  }

  getKeyClasses = keyValue =>
    classnames(this.props.classes.key, {
      [this.props.classes.pressedKey]: keyValue === this.state.pressedKey,
    })

  componentDidMount() {
    this.interval = setInterval(this.onInterval, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onInterval = () => {
    this.setState({
      value: generateRandomNumber(),
      pressedKey: pickRandomKey(),
    })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.container}>
        <div className={classes.calculator}>
          <div className={classes.screen}>{value}</div>
          <div className={classes.line}>
            <div className={this.getKeyClasses('7')}>7</div>
            <div className={this.getKeyClasses('8')}>8</div>
            <div className={this.getKeyClasses('9')}>9</div>
            <div className={this.getKeyClasses('/')}>/</div>
          </div>
          <div className={classes.line}>
            <div className={this.getKeyClasses('4')}>4</div>
            <div className={this.getKeyClasses('5')}>5</div>
            <div className={this.getKeyClasses('6')}>6</div>
            <div className={this.getKeyClasses('x')}>x</div>
          </div>
          <div className={classes.line}>
            <div className={this.getKeyClasses('1')}>1</div>
            <div className={this.getKeyClasses('2')}>2</div>
            <div className={this.getKeyClasses('3')}>3</div>
            <div className={this.getKeyClasses('-')}>-</div>
          </div>
          <div className={classes.line}>
            <div className={this.getKeyClasses('0')}>0</div>
            <div className={this.getKeyClasses('.')}>.</div>
            <div className={this.getKeyClasses('+')}>+</div>
            <div className={this.getKeyClasses('=')}>=</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CalculatorProgress)
