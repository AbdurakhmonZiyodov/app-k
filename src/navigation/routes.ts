export enum APP_ROUTES {
  // public
  login = 'APP.LOGIN',
  create_account = 'APP.CREATE_ACCOUNT',
  forgot_password_with_email = 'APP.FORGOT_PASSWORD_WITH_EMAIL',
  forgot_password_with_phone = 'APP.FORGOT_PASSWORD_WITH_PHONE',
  otp_verify_of_login = 'APP.OTP_VERIFY_OF_LOGIN',
  otp_verify_of_create_account = 'APP.OTP_VERIFY_OF_CREATE_ACCOUNT',

  //   private
  bottom_navigation = 'APP.BOTTOM_NAVIGATION',
  on_boarding = 'APP.ON_BOARDING',
  dao_password = 'APP.DAO_PASSWORD',
  marketplace = 'APP.MARKETPLACE',
  account = 'APP.ACCOUNT',
  company_list = 'APP.COMPANY_LIST',
  main = 'APP.MAIN',
  activities = 'APP.ACTIVITIES',
  tasks = 'APP.TASKS',
}

export enum ACTIVITY_ROUTES {
  home = 'ACTIVITIES.HOME',
  tasks = 'ACTIVITIES.TASKS',
  votings = 'ACTIVITIES.VOTINGS',
  company_item = 'ACTIVITIES.COMPANY_ITEM',
  company_list = 'ACTIVITIES.COMPANY_LIST',
  tasks_recomended = 'ACTIVITIES.TASKS_RECOMENDED',
  voting_tasks = 'ACTIVITIES.VOTING_TASKS',
}

export enum ACCOUNT_ROUTES {
  home = 'ACCOUNTS.HOME',
  change_password = 'ACCOUNTS.CHANGE_PASSWORD',
  language = 'ACCOUNTS.LANGUAGE',
  personal_info = 'ACCOUNTS.PERSONAL_INFO',
  biling = 'ACCOUNTS.BILING',
  billing_edit = 'ACCOUNTS.BILLING_EDIT',
  billing_done = 'ACCOUNTS.BILLING_DONE',
  add_payment_system = 'ACCOUNTS.ADD_PAYMENT_SYSTEM',
  payment_system_added = 'ACCOUNTS.PAYMENT_SYSTEM_ADDED',
  notifaction = 'ACCOUNTS.NOTIFICATION',
  faq_support = 'ACCOUNTS.FAQ&SUPPORT',
}

export enum MARKETPLACE_ROUTES {
  home = 'MARKETPLACE.HOME',
  product_item = 'MARKETPLACE.PRODUCT_ITEM',
  product_item_physical = 'MARKETPLACE.PRODUCT_ITEM_PHYSICAL',
  checkout = 'MARKETPLACE.CHECKOUT',
}
