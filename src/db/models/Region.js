import { DataTypes } from '@sequelize/core';
import { safeJSONParse } from './abc';

const Region = {
  RegionID: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true
  },
  RegionName: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  Sport: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Season: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  RegistrationDate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DefaultCrew: {
    type: DataTypes.STRING(200),
    allowNull: true,
    get() {
      return safeJSONParse(this.getDataValue('DefaultCrew'));
    },
    set(value) {
      this.setDataValue('DefaultCrew', JSON.stringify(value));
    }
  },
  ShowAddress: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  AllowBookOffs: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  BookOffHoursBefore: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  HasPaid: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  PaymentData: {
    type: DataTypes.STRING(2000),
    allowNull: false
  },
  LastExecutedCronJob: {
    type: DataTypes.STRING,
    allowNull: false
  },
  MaxDateShowAvailableSpots: {
    type: DataTypes.STRING,
    allowNull: false
  },
  EmailAvailableSpots: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  EmailRequestedGames: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  DefaultArriveBeforeMins: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  DefaultMaxGameLengthMins: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  HasOfficials: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  HasScorekeepers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  IsDemo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  Country: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  State: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  City: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  Address: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  PostalCode: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  ShowLinksToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowParksToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowLeaguesToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowHolidayListToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowContactListToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowAvailabilityToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowAvailableSpotsToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowFullScheduleToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowAvailabilityDueDateToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  EntityType: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  ShowOfficialRegionsToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowTeamsToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  OnlyAllowedToConfirmDaysBefore: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ShowStandingsToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowStatsToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ExtraScoreParameters: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('ExtraScoreParameters'));
    },
    set(value) {
      this.setDataValue('ExtraScoreParameters', JSON.stringify(value));
    }
  },
  HomeTeamCanEnterScore: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ScorekeeperCanEnterScore: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  TeamCanEnterStats: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ScorekeeperCanEnterStats: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  AwayTeamCanEnterScore: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  HomeTeamCanCancelGameHoursBefore: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  AwayTeamCanCancelGameHoursBefore: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  StatIndex: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  MinimumValue: {
    type: DataTypes.STRING(200),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('MinimumValue'));
    },
    set(value) {
      this.setDataValue('MinimumValue', JSON.stringify(value));
    }
  },
  MinimumPercentage: {
    type: DataTypes.STRING(200),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('MinimumPercentage'));
    },
    set(value) {
      this.setDataValue('MinimumPercentage', JSON.stringify(value));
    }
  },
  UniquePlayers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  StandingIndex: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  TimeZone: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  AutoSyncCancellationHoursBefore: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  AutoSyncSchedule: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  DefaultArriveBeforeAwayMins: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  DefaultArriveBeforePracticeMins: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  DefaultMaxGameLengthPracticeMins: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ShowMainPageToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  HasEnteredMainPage: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  EmailConfirmDaysBefore: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  IncludeAfternoonAvailabilityOnWeekdays: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  IncludeMorningAvailabilityOnWeekdays: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  EnableNotFilledInInAvailability: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  PhotoId: {
    type: DataTypes.UUID,
    allowNull: true
  },
  HasPhotoId: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowPhotosToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowArticlesToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowWallToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  StatLinks: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  LeagueRankMaxes: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('LeagueRankMaxes'));
    },
    set(value) {
      this.setDataValue('LeagueRankMaxes', JSON.stringify(value));
    }
  },
  LinkedRegionIds: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('LinkedRegionIds'));
    },
    set(value) {
      this.setDataValue('LinkedRegionIds', JSON.stringify(value));
    }
  },
  ShowOnlyDueDatesRangeForAvailability: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowRank: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowSubRank: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowRankToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowSubRankToNonMembers: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  DefaultContactListSort: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  ShowRankInSchedule: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowSubRankInSchedule: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  SubRankIsNumber: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowTeamsInSchedule: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  SeniorRankNameEnglish: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  SeniorRankNameFrench: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  JuniorRankNameEnglish: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  JuniorRankNameFrench: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  IntermediateRankNameEnglish: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  IntermediateRankNameFrench: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  NoviceRankNameEnglish: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  NoviceRankNameFrench: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  RookieRankNameEnglish: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  RookieRankNameFrench: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  SortSubRankDesc: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  MaxSubRankRequest: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false
  },
  ShowRankInGlobalAvailability: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ShowSubRankInGlobalAvailability: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  SortGlobalAvailabilityByRank: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  SortGlobalAvailabilityBySubRank: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  NotifyPartnerOfCancellation: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  RegionIsLadderLeague: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  NumberOfPlayersInLadderLeague: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  HasSupervisors: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  EnableDualAvailability: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  IsAvailableText: {
    type: DataTypes.STRING(200),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('IsAvailableText'));
    },
    set(value) {
      this.setDataValue('IsAvailableText', JSON.stringify(value));
    }
  },
  IsAvailableDualText: {
    type: DataTypes.STRING(200),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('IsAvailableDualText'));
    },
    set(value) {
      this.setDataValue('IsAvailableDualText', JSON.stringify(value));
    }
  },
  IsAvailableCombinedText: {
    type: DataTypes.STRING(200),
    allowNull: false,
    get() {
      return safeJSONParse(this.getDataValue('IsAvailableCombinedText'));
    },
    set(value) {
      this.setDataValue('IsAvailableCombinedText', JSON.stringify(value));
    }
  }
};

// Optional Assosiatiations
const RegionAssociations = {
  hasOne: [
    {
      modelName: 'Team',
      foreignKey: 'RegionId',
      sourceKey: 'RegionID',
      as: 'AwayTeam'
    },
    {
      modelName: 'Team',
      foreignKey: 'RegionId',
      sourceKey: 'RegionID',
      as: 'HomeTeam'
    },
    {
      modelName: 'Park',
      foreignKey: 'RegionId',
      sourceKey: 'RegionID',
      as: 'SchedulePark'
    },
  ],
  hasMany:[
    {
      modelName: 'RegionUser',
      foreignKey: 'RegionId',
      sourceKey: 'RegionID',
    },
    {
      modelName: 'RegionLeague',
      foreignKey: 'RegionId',
      sourceKey: 'RegionID',
    },
    {
      modelName: 'Team',
      foreignKey: 'RegionId',
      // sourceKey: 'RegionID',
    },
    // {
    //   modelName: 'Team',
    //   foreignKey: 'RegionId',
    //   // sourceKey: 'RegionID',
    //   as: 'HomeTeam'
    // },
    {
      modelName: 'Park',
      foreignKey: 'RegionId',
      sourceKey: 'RegionID',
    },
  ]
}

export { Region, RegionAssociations }
