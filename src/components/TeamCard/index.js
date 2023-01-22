import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachCard} = this.props
    const {name, id, teamImageUrl} = eachCard
    return (
      <Link className="link-item" to={`/team-matches/${id}`}>
        <li className="card-item">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <h1 className="team-heading">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
