import { ResponseTypes } from '../static/types';

export const eventMock = {
  type: ResponseTypes.LIVE_EVENTS_DATA,
  data: [
    {
      eventId: 21249939,
      name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
      displayOrder: -1000,
      sort: 'MTCH',
      linkedEventId: 21228740,
      classId: 5,
      className: 'Football',
      typeId: 10003971,
      typeName: 'Football Live',
      linkedEventTypeId: 10005942,
      markets: [93649849],
      linkedEventTypeName: 'Chinese Super League',
      startTime: '2017-09-19T11:35:23.000Z',
      scores: {
        home: 0,
        away: 0,
      },
      competitors: [
        {
          name: 'Shanghai Shenhua',
          position: 'home',
        },
        {
          name: 'Shandong Luneng Taishan',
          position: 'away',
        },
      ],
      status: {
        active: true,
        started: true,
        live: true,
        resulted: false,
        finished: false,
        cashoutable: true,
        displayable: true,
        suspended: false,
        requestabet: false,
      },
      boostCount: 0,
      superBoostCount: 0,
    },
  ],
};

export const singleEventMock = {
  type: 'EVENT_DATA',
  data: {
    eventId: 21249939,
    name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
    displayOrder: -1000,
    sort: 'MTCH',
    linkedEventId: 21228740,
    classId: 5,
    className: 'Football',
    typeId: 10003971,
    typeName: 'Football Live',
    linkedEventTypeId: 10005942,
    linkedEventTypeName: 'Chinese Super League',
    startTime: '2017-09-19T11:35:23.000Z',
    scores: {
      home: 0,
      away: 0,
    },
    competitors: [
      {
        name: 'Shanghai Shenhua',
        position: 'home',
      },
      {
        name: 'Shandong Luneng Taishan',
        position: 'away',
      },
    ],
    status: {
      active: true,
      started: true,
      live: true,
      resulted: false,
      finished: false,
      cashoutable: true,
      displayable: true,
      suspended: false,
      requestabet: false,
    },
    boostCount: 0,
    superBoostCount: 0,
    markets: [93649849],
  },
};

export const marketMock = {
  type: ResponseTypes.MARKET_DATA,
  data: {
    marketId: 93649849,
    eventId: 21249939,
    name: 'Both Score No Draw',
    displayOrder: -32496,
    type: 'standard',
    status: {
      active: true,
      resulted: false,
      cashoutable: false,
      displayable: true,
      suspended: false,
      noExtraTime: false,
      live: true,
    },
    liabilities: {
      livePriceLimit: 2500,
    },
    spAvail: false,
    outcomes: [367530493],
  },
};

export const outcomeMock = {
  type: ResponseTypes.OUTCOME_DATA,
  data: {
    outcomeId: 367530493,
    marketId: 93649849,
    eventId: 21249939,
    name: 'No',
    displayOrder: 10,
    result: {
      place: 0,
      result: '-',
      favourite: false,
    },
    price: {
      decimal: '10',
      num: '9',
      den: '1',
    },
    status: {
      active: true,
      resulted: false,
      cashoutable: false,
      displayable: true,
      suspended: false,
      result: '-',
    },
  },
};
