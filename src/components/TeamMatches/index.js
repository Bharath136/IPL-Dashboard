import {Component} from 'react'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({teamMatches: updatedData})
  }

  render() {
    const {teamMatches} = this.state
    console.log(teamMatches)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches
    // console.log(latestMatchDetails)
    // console.log(recentMatches)

    return (
      <div className="bg-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {/* {recentMatches.map(eachMatch => (
          <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
        ))} */}
      </div>
    )
  }
}

export default TeamMatches
