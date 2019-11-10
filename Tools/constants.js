exports.COUNTRY_TO_LOCALE = {
  'cn': 'zh',
  'us': 'en',
};

exports.COUNTRY_TO_CURRENCY = {
  'cn': 'cny',
  'us': 'usd',
};

exports.COUNTRYCODE_TO_COUNTRY = {
  '86': 'cn',
  '1': 'us',
};


exports.CURRENCY_X_RATE = {
  'usd': {
    'cny': 7,
  },
  'cny': {
    'usd': 0.14,
  }
};

exports.PHONEVERIFICATION_EXPIRE_DURATION = 60 * 1000;

exports.MEMBERSHIP_BASIC_INFO = ['level', 'status', 'dividend'];
exports.MEMBERSHIP_PAYMENT_INFO = ['currency', 'amount', 'paymentName', 'paymentExp', 'paymentCountry', 'paymentZip', 'paymentMethod', 'paymentIdentifier'];

exports.MEMBERSHIP_PRICE_TABLE = {
  plans: {
    'basic': 198,
  },
  currency: 'usd',
};

exports.MEMBERSHIP_POINT_TABLE = {
  'total': 10000,
  // 'finance': 50,
  // 'travel': 50,
  // 'restaurant': 50,
  // 'event': 50,
  // 'hotel': 50,
  // 'business': 50,
  // 'publicRelation': 50,
  // 'meetup': 50
  'finance': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/finance.png',
  },
  'travel': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/travel.png',
  },
  'restaurant': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/restaurant.png',
  },
  'event': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/event.png',
  },
  'hotel': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/hotel.png',
  },
  'business': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/business.png',
  },
  'publicRelation': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/publicRelation.png',
  },
  'meetup': {
    'point': 50,
    'description': '',
    'image': 'https://www.fusion.club/pics/meetup.png',
  }
};

exports.PROFILE_PUBLIC_INFO = ['id', 'username', 'email', 'area', 'industry', 'avatar', 'user', 'verificationStatus', 'verifiedName', 'verifiedCompany', 'verifiedOccupation', 'isOfficalActivityAccount', 'isActivityAccount'];
exports.PROFILE_NOT_POPULATE = ['user'];
exports.PROFILE_VERIFY_REQUIRED = ['verifiedName', 'verifiedOccupation', 'verifiedCompany', 'verifiedFund', 'verifiedPhoneNumber', 'verifiedEmail', 'cardFrontImage', 'cardBackImage'];

exports.ACTIVITY_NUMBER_FIELD = ['fund', 'fundRequest', 'transferPercent', 'valuation', 'period', 'interestPercent', 'viewCount'];

exports.INVITATION_XINGE_TEMPLATE = {
  title: 'You have a new connection invitation waiting for you',
  message: 'Learn more about invitation',
};

exports.TEST_ACCOUNT = ['admin', '6282259193', '9999999999',
  '4083095873', '4158125971', '4159618007', '9727500460', '5109655888',
  '9992221111', '9992221112', '9992221113', '9992221114', '9992221115', '9992221116', '9992221117', '9992221118'];
