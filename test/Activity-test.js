const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity')
const data = require('../data/activity-test-data')

describe('Activity Test', function () {

  let activity;

  beforeEach(function () {
    activity = new Activity()
  })

  it('should be a function', function () {
    expect(Activity).to.be.a('function')
  })

  it('should have be an instance of activity', function () {
    expect(activity).to.be.a.instanceOf(Activity)
  })

  it('should return the activity data based on the user ID', function () {
    expect(activity.findActivityData(1)).to.be.equal(data[0])
  })

  it('should calculate how many miles walked today in miles, based on their stride length', function () {
    expect(activity.userMilesWalkedToday('06/05/2019')).to.be.a('number')
    expect(activity.userMilesWalkedToday('06/05/2019')).to.be.equal(6.56)
  })

  it('should return how many minutes the user was active for a given day(specified by a date)', function () {
    expect(activity.userActiveMinutesPerDay('06/05/2019')).to.be.a('number')
    expect(activity.userActiveMinutesPerDay('06/05/2019')).to.equal(204)
  })

  it('should return how many flights of stairs the user has climbed for a given day(specified by a date)', function () {
    expect(activity.userStairsClimbedToday('06/05/2019')).to.be.a('number')
    expect(activity.userStairsClimbedToday('06/05/2019')).to.equal(46)
  })

  it('should return how many minutes active did a user average for a given week', function () {
    expect(activity.userAverageMinutesPerWeek('15/05/2019')).to.equal(197.29)
  })

  it('should return how many steps did a user take per day for a given week', function () {
    expect(activity.userStepsPerWeek('21/05/2019')).to.be.a('array')
    expect(activity.userStepsPerWeek('21/05/2019')).to.have.length(7)
  })

  it('should return the how many steps a user took on a given week', function () {
    expect(activity.userTotalStepsOnWeek('06/05/2019')).to.be.a('number')
    expect(activity.userTotalStepsOnWeek('21/06/2019')).to.equal(67564)
  })

  it('should return how many minutes active was a user active per day for a given week', function () {
    expect(activity.userMinutesPerWeek('21/05/2019')).to.be.a('array')
    expect(activity.userMinutesPerWeek('21/05/2019')).to.have.length(7)
  })

  it('should return how many stairs did a user climb per day for a given week', function () {
    expect(activity.userStairsPerWeek('21/05/2019')).to.be.a('array')
    expect(activity.userStairsPerWeek('21/05/2019')).to.have.length(7)
  })

  it('should return true or false for if they reached their step goal for a given day(specified by a date)', function () {
    expect(user.user.dailyStepGoal).to.equal(8000)
    expect(activity.activeData.activityData[22].numSteps).to.equal(11328)
    expect(user.user.dailyStepGoal).to.be.lessThan(activity.activeData.activityData[22].numSteps)
    expect(activity.userStepGoalReached('28/05/2019')).to.equal(true)
  })

  it('should find all the days where the user exceeded their step goal', function () {
    expect(activity.userDaysExceededStepGoal()).to.be.a('array')
    expect(activity.userDaysExceededStepGoal()).to.not.include('06/05/2019')
  })

  it('should return the average number of stairs climbed for a specified date for all users', function () {
    expect(activity.allUsersStairsClimbedToday('06/05/2019')).to.be.a('number')
    expect(activity.allUsersStairsClimbedToday('06/05/2019')).to.equal(29)
  })

  it('should return the average number of steps taken for a specific date', function () {
    expect(activity.allUsersStepsTakenOnDate('06/05/2019')).to.be.equal(6872)
  })

  it('should compare the user and friends', function () {
    expect(activity.compareTheUserandFriends('21/05/2019')).to.be.a('array')
  })

  it('should return the average number of minutes active for a specific date', function () {
    expect(activity.allUsersMinutesActiveForDate('06/05/2019')).to.equal(128)
  })

  it('should find all the three day step streaks for a user', function () {
    expect(activity.userStepStreak()).to.be.a('array')
  })

  it('should find a users all time step record', function () {
    expect(activity.userAllTimeStepRecord()).to.be.a('number');
    expect(activity.userAllTimeStepRecord()).to.equal(14811)
  })

  it('should find their all time user record of flights of stairs', function () {
    expect(activity.userAllTimeStairRecord()).to.equal(50)
  })

})