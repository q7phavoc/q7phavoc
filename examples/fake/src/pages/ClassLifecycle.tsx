import {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer
  }

  componentDidMount() {
    const duration = 1000
    const intervalId = setInterval(() => this.setState({today: new Date()}), duration)
    this.setState({intervalId})
  }
  componentWillUnmount() {
    clearInterval(this.state?.intervalId)
  }
  render() {
    const {today} = this.state
    return (
      <section className="mt-4">
        <Title>ClassLIfecycle</Title>
        <div className="mt-4 flex flex-col items-center">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    )
  }
}
