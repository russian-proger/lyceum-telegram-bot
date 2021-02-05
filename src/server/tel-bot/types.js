/**
 * @type {{
 *  id: Number
 *  is_bot: Boolean
 *  first_name: String
 *  last_name: String
 *  username: String
 *  language_code: String
 *  can_join_groups: Boolean
 *  can_read_all_group_messages: Boolean
 *  supports_inline_queries: Boolean
 * }}
 */
const User = null;

/**
 * @type {{
 *  id: Number
 *  type: String
 *  title: String
 *  username: String
 *  first_name: String
 *  last_name: String
 *  photo: ChatPhoto
 *  bio: String
 *  description: String
 *  invite_link: String
 *  pinned_message: Message
 *  permissions: ChatPermissions
 *  slow_mode_delay: Number
 *  sticker_set_name: String
 *  can_set_sticker_set: Boolean
 *  linked_chat_id: Number
 *  location: ChatLocation
 * }}
 */
const Chat = null;

/**
 * @type {{
 *  message_id: Number
 *  from: User
 *  sender_chat: Chat
 *  date: Number
 *  chat: Chat
 *  forward_from: User
 *  forward_from_chat: Chat
 *  forward_from_message_id: Number
 *  forward_signature: String
 *  forward_sender_name: String
 *  forward_date: Number
 *  reply_to_message: Message
 *  via_bot: User
 *  edit_date: Number
 *  media_group_id: String
 *  author_signature: String
 *  text: String
 *  entities: Array<MessageEntity>
 *  animation: Animation
 *  audio: Audio
 *  document: Document
 *  photo: Array<PhotoSize>
 *  sticker: Sticker
 *  video: Video
 *  video_note: VideoNote
 *  voice: Voice
 *  caption: String
 *  caption_entities: Array<MessageEntity>
 *  contact: Contact
 *  dice: Dice
 *  game: Game
 *  poll: Poll
 *  venue: Venue
 *  location: Location
 *  new_chat_members: Array<User>
 *  left_chat_member: User
 *  new_chat_title: String
 *  new_chat_photo: Array<PhotoSize>
 *  delete_chat_photo: True
 *  group_chat_created: True
 *  supergroup_chat_created: True
 *  channel_chat_created: True
 *  migrate_to_chat_id: Number
 *  migrate_from_chat_id: Number
 *  pinned_message: Message
 *  invoice: Invoice
 *  successful_payment: SuccessfulPayment
 *  connected_website: String
 *  passport_data: PassportData
 *  proximity_alert_triggered: ProximityAlertTriggered
 *  reply_markup: InlineKeyboardMarkup
 * }}
 */
const Message = null;

/**
 * @type {{
 *  message_id: Number
 * }}
 */
const MessageId = null;

/**
 * @type {{
 *  type: String
 *  offset: Number
 *  length: Number
 *  url: String
 *  user: User
 *  language: String
 * }}
 */
const MessageEntity = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  width: Number
 *  height: Number
 *  file_size: Number
 * }}
 */
const PhotoSize = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  width: Number
 *  height: Number
 *  duration: Number
 *  thumb: PhotoSize
 *  file_name: String
 *  mime_type: String
 *  file_size: Number
 * }}
 */
const Animation = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  duration: Number
 *  performer: String
 *  title: String
 *  file_name: String
 *  mime_type: String
 *  file_size: Number
 *  thumb: PhotoSize
 * }}
 */
const Audio = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  thumb: PhotoSize
 *  file_name: String
 *  mime_type: String
 *  file_size: Number
 * }}
 */
const Document = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  width: Number
 *  height: Number
 *  duration: Number
 *  thumb: PhotoSize
 *  file_name: String
 *  mime_type: String
 *  file_size: Number
 * }}
 */
const Video = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  length: Number
 *  duration: Number
 *  thumb: PhotoSize
 *  file_size: Number
 * }}
 */
const VideoNote = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  duration: Number
 *  mime_type: String
 *  file_size: Number
 * }}
 */
const Voice = null;

/**
 * @type {{
 *  phone_number: String
 *  first_name: String
 *  last_name: String
 *  user_id: Number
 *  vcard: String
 * }}
 */
const Contact = null;

/**
 * @type {{
 *  emoji: String
 *  value: Number
 * }}
 */
const Dice = null;

/**
 * @type {{
 *  text: String
 *  voter_count: Number
 * }}
 */
const PollOption = null;

/**
 * @type {{
 *  poll_id: String
 *  user: User
 *  option_ids: Array<Number>
 * }}
 */
const PollAnswer = null;

/**
 * @type {{
 *  id: String
 *  question: String
 *  options: Array<PollOption>
 *  total_voter_count: Number
 *  is_closed: Boolean
 *  is_anonymous: Boolean
 *  type: String
 *  allows_multiple_answers: Boolean
 *  correct_option_id: Number
 *  explanation: String
 *  explanation_entities: Array<MessageEntity>
 *  open_period: Number
 *  close_date: Number
 * }}
 */
const Poll = null;

/**
 * @type {{
 *  longitude: Float
 *  latitude: Float
 *  horizontal_accuracy: Float number
 *  live_period: Number
 *  heading: Number
 *  proximity_alert_radius: Number
 * }}
 */
const Location = null;

/**
 * @type {{
 *  location: Location
 *  title: String
 *  address: String
 *  foursquare_id: String
 *  foursquare_type: String
 *  google_place_id: String
 *  google_place_type: String
 * }}
 */
const Venue = null;

/**
 * @type {{
 *  traveler: User
 *  watcher: User
 *  distance: Number
 * }}
 */
const ProximityAlertTriggered = null;

/**
 * @type {{
 *  total_count: Number
 *  photos: Array<Array<PhotoSize>>
 * }}
 */
const UserProfilePhotos = null;

/**
 * @type {{
 *  file_id: String
 *  file_unique_id: String
 *  file_size: Number
 *  file_path: String
 * }}
 */
const File = null;

/**
 * @type {{
 *  keyboard: Array<Array<KeyboardButton>>
 *  resize_keyboard: Boolean
 *  one_time_keyboard: Boolean
 *  selective: Boolean
 * }}
 */
const ReplyKeyboardMarkup = null;

/**
 * @type {{
 *  text: String
 *  request_contact: Boolean
 *  request_location: Boolean
 *  request_poll: KeyboardButtonPollType
 * }}
 */
const KeyboardButton = null;

/**
 * @type {{
 *  type: String
 * }}
 */
const KeyboardButtonPollType = null;

/**
 * @type {{
 *  remove_keyboard: True
 *  selective: Boolean
 * }}
 */
const ReplyKeyboardRemove = null;

/**
 * @type {{
 *  inline_keyboard: Array<Array<InlineKeyboardButton>>
 * }}
 */
const InlineKeyboardMarkup = null;

/**
 * @type {{
 *  text: String
 *  url: String
 *  login_url: LoginUrl
 *  callback_data: String
 *  switch_inline_query: String
 *  switch_inline_query_current_chat: String
 *  callback_game: CallbackGame
 *  pay: Boolean
 * }}
 */
const InlineKeyboardButton = null;

/**
 * @type {{
 *  url: String
 *  forward_text: String
 *  bot_username: String
 *  request_write_access: Boolean
 * }}
 */
const LoginUrl = null;

/**
 * @type {{
 *  id: String
 *  from: User
 *  message: Message
 *  inline_message_id: String
 *  chat_instance: String
 *  data: String
 *  game_short_name: String
 * }}
 */
const CallbackQuery = null;

/**
 * @type {{
 *  force_reply: True
 *  selective: Boolean
 * }}
 */
const ForceReply = null;

/**
 * @type {{
 *  small_file_id: String
 *  small_file_unique_id: String
 *  big_file_id: String
 *  big_file_unique_id: String
 * }}
 */
const ChatPhoto = null;

/**
 * @type {{
 *  user: User
 *  status: String
 *  custom_title: String
 *  is_anonymous: Boolean
 *  can_be_edited: Boolean
 *  can_post_messages: Boolean
 *  can_edit_messages: Boolean
 *  can_delete_messages: Boolean
 *  can_restrict_members: Boolean
 *  can_promote_members: Boolean
 *  can_change_info: Boolean
 *  can_invite_users: Boolean
 *  can_pin_messages: Boolean
 *  is_member: Boolean
 *  can_send_messages: Boolean
 *  can_send_media_messages: Boolean
 *  can_send_polls: Boolean
 *  can_send_other_messages: Boolean
 *  can_add_web_page_previews: Boolean
 *  until_date: Number
 * }}
 */
const ChatMember = null;

/**
 * @type {{
 *  can_send_messages: Boolean
 *  can_send_media_messages: Boolean
 *  can_send_polls: Boolean
 *  can_send_other_messages: Boolean
 *  can_add_web_page_previews: Boolean
 *  can_change_info: Boolean
 *  can_invite_users: Boolean
 *  can_pin_messages: Boolean
 * }}
 */
const ChatPermissions = null;

/**
 * @type {{
 *  location: Location
 *  address: String
 * }}
 */
const ChatLocation = null;

/**
 * @type {{
 *  command: String
 *  description: String
 * }}
 */
const BotCommand = null;

/**
 * @type {{
 *  migrate_to_chat_id: Number
 *  retry_after: Number
 * }}
 */
const ResponseParameters = null;

/**
 * @type {{
 *  type: String
 *  media: String
 *  caption: String
 *  parse_mode: String
 *  caption_entities: Array<MessageEntity>
 * }}
 */
const InputMediaPhoto = null;

/**
 * @type {{
 *  type: String
 *  media: String
 *  thumb: InputFile or String
 *  caption: String
 *  parse_mode: String
 *  caption_entities: Array<MessageEntity>
 *  width: Number
 *  height: Number
 *  duration: Number
 *  supports_streaming: Boolean
 * }}
 */
const InputMediaVideo = null;

/**
 * @type {{
 *  type: String
 *  media: String
 *  thumb: InputFile or String
 *  caption: String
 *  parse_mode: String
 *  caption_entities: Array<MessageEntity>
 *  width: Number
 *  height: Number
 *  duration: Number
 * }}
 */
const InputMediaAnimation = null;

/**
 * @type {{
 *  type: String
 *  media: String
 *  thumb: InputFile or String
 *  caption: String
 *  parse_mode: String
 *  caption_entities: Array<MessageEntity>
 *  duration: Number
 *  performer: String
 *  title: String
 * }}
 */
const InputMediaAudio = null;

/**
 * @type {{
 *  type: String
 *  media: String
 *  thumb: InputFile or String
 *  caption: String
 *  parse_mode: String
 *  caption_entities: Array<MessageEntity>
 *  disable_content_type_detection: Boolean
 * }}
 */
const InputMediaDocument = null;

/**
 * @type {{
 *  update_id: Number
 *  message: Message
 *  edited_message: Message
 *  channel_post: Message
 *  edited_channel_post: Message
 *  inline_query: InlineQuery
 *  chosen_inline_result: ChosenInlineResult
 *  callback_query: CallbackQuery
 *  shipping_query: ShippingQuery
 *  pre_checkout_query: PreCheckoutQuery
 *  poll: Poll
 *  poll_answer: PollAnswer
 * }}
 */
const Update = null;

module.exports = {
 User,
 Chat,
 Message,
 MessageId,
 MessageEntity,
 PhotoSize,
 Animation,
 Audio,
 Document,
 Video,
 VideoNote,
 Voice,
 Contact,
 Dice,
 PollOption,
 PollAnswer,
 Poll,
 Location,
 Venue,
 ProximityAlertTriggered,
 UserProfilePhotos,
 File,
 ReplyKeyboardMarkup,
 KeyboardButton,
 KeyboardButtonPollType,
 ReplyKeyboardRemove,
 InlineKeyboardMarkup,
 InlineKeyboardButton,
 LoginUrl,
 CallbackQuery,
 ForceReply,
 ChatPhoto,
 ChatMember,
 ChatPermissions,
 ChatLocation,
 BotCommand,
 ResponseParameters,
 InputMediaPhoto,
 InputMediaVideo,
 InputMediaAnimation,
 InputMediaAudio,
 InputMediaDocument,
 Update
};