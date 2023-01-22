import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInning: latestMatchDetails.first_innings,
    secondInning: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {competingTeam, date, venue} = updatedMatchDetails
  console.log(updatedMatchDetails)

  return (
    <div className="latest-match-container">
      <div className="container">
        <h1 className="competing-team-heading">{competingTeam}</h1>
        <p className="competing-team-date">{date}</p>
        <p className="competing-team-text">{venue}</p>
      </div>
    </div>
  )
}

export default LatestMatch
