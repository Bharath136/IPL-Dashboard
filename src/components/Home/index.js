import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: []}

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamCardObject = await response.json()
    const teamCardsList = teamCardObject.teams

    const updatedCardsList = teamCardsList.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamCardsList: updatedCardsList})
  }

  render() {
    const {teamCardsList} = this.state
    console.log(teamCardsList)
    return (
      <div className="home-container">
        <div className="ipl-logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-cards-list">
          {teamCardsList.map(eachCard => (
            <TeamCard eachCard={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
