export interface User {
	id: Number;
	is_bot: Boolean;
	first_name: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	can_join_groups?: Boolean;
	can_read_all_group_messages?: Boolean;
	supports_inline_queries?: Boolean
}

export interface Chat {
	id: Number;
	type: string;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	photo?: ChatPhoto;
	bio?: string;
	description?: string;
	invite_link?: string;
	pinned_message?: Message;
	permissions?: ChatPermissions;
	slow_mode_delay?: Number;
	sticker_set_name?: string;
	can_set_sticker_set?: Boolean;
	linked_chat_id?: Number;
	location?: ChatLocation
}

export interface Game {
	title?: string;
	description?: string;
	photo?: Array<PhotoSize>;
	text?: string;
	text_entities?: Array<MessageEntity>;
	animation?: Animation
}

export interface Message {
	message_id: Number;
	from?: User;
	sender_chat?: Chat;
	date: Number;
	chat: Chat;
	forward_from?: User;
	forward_from_chat?: Chat;
	forward_from_message_id?: Number;
	forward_signature?: string;
	forward_sender_name?: string;
	forward_date?: Number;
	reply_to_message?: Message;
	via_bot?: User;
	edit_date?: Number;
	media_group_id?: string;
	author_signature?: string;
	text?: string;
	entities?: Array<MessageEntity>;
	animation?: Animation;
	audio?: Audio;
	document?: Document;
	photo?: Array<PhotoSize>;
	sticker?: Sticker;
	video?: Video;
	video_note?: VideoNote;
	voice?: Voice;
	caption?: string;
	caption_entities?: Array<MessageEntity>;
	contact?: Contact;
	dice?: Dice;
	game?: Game;
	poll?: Poll;
	venue?: Venue;
	location?: Location;
	new_chat_members?: Array<User>;
	left_chat_member?: User;
	new_chat_title?: string;
	new_chat_photo?: Array<PhotoSize>;
	delete_chat_photo?: Boolean;
	group_chat_created?: Boolean;
	supergroup_chat_created?: Boolean;
	channel_chat_created?: Boolean;
	migrate_to_chat_id?: Number;
	migrate_from_chat_id?: Number;
	pinned_message?: Message;
	invoice?: Invoice;
	successful_payment?: SuccessfulPayment;
	connected_website?: string;
	passport_data?: PassportData;
	proximity_alert_triggered?: ProximityAlertTriggered;
	reply_markup?: InlineKeyboardMarkup
}

export interface Update {
	update_id: Number;
	message?: Message;
	edited_message?: Message;
	channel_post?: Message;
	edited_channel_post?: Message;
	inline_query?: InlineQuery;
	chosen_inline_result?: ChosenInlineResult;
	callback_query?: CallbackQuery;
	shipping_query?: ShippingQuery;
	pre_checkout_query?: PreCheckoutQuery;
	poll?: Poll;
	poll_answer?: PollAnswer;
}

export interface ShippingQuery {
	id?: string;
	from?: User;
	invoice_payload?: string;
	shipping_address?: ShippingAddress;
}

export interface PreCheckoutQuery {
	id?: string;
	from?: User;
	currency?: string;
	total_amount?: Number;
	invoice_payload?: string;
	shipping_option_id?: string;
	order_info?: OrderInfo;
}

export interface InlineQuery {
	id?: string;
	from?: User;
	location?: Location;
	query?: string;
	offset?: string;
}

export interface InlineQueryResult extends
	InlineQueryResultCachedAudio,
	InlineQueryResultCachedDocument,
	InlineQueryResultCachedGif,
	InlineQueryResultCachedMpeg4Gif,
	InlineQueryResultCachedPhoto,
	InlineQueryResultCachedSticker,
	InlineQueryResultCachedVideo,
	InlineQueryResultCachedVoice,
	InlineQueryResultArticle,
	InlineQueryResultAudio,
	InlineQueryResultContact,
	InlineQueryResultGame,
	InlineQueryResultDocument,
	InlineQueryResultGif,
	InlineQueryResultMpeg4Gif,
	InlineQueryResultPhoto,
	InlineQueryResultVenue,
	InlineQueryResultVideo,
	InlineQueryResultVoice {

}

export interface answerInlineQuery {
	inline_query_id?: string;
	results?: Array<InlineQueryResult>;
	cache_time?: Number;
	is_personal?: Boolean;
	next_offset?: string;
	switch_pm_text?: string;
	switch_pm_parameter?: string;
}

export interface InlineQueryResultArticle {
	type?: string;
	id?: string;
	title?: string;
	input_message_content?: InputMessageContent;
	reply_markup?: InlineKeyboardMarkup;
	url?: string;
	hide_url?: Boolean;
	description?: string;
	thumb_url?: string;
	thumb_width?: Number;
	thumb_height?: Number;
}

export interface InlineQueryResultPhoto {
	type?: string;
	id?: string;
	photo_url?: string;
	thumb_url?: string;
	photo_width?: Number;
	photo_height?: Number;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultGif {
	type?: string;
	id?: string;
	gif_url?: string;
	gif_width?: Number;
	gif_height?: Number;
	gif_duration?: Number;
	thumb_url?: string;
	thumb_mime_type?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultMpeg4Gif {
	type?: string;
	id?: string;
	mpeg4_url?: string;
	mpeg4_width?: Number;
	mpeg4_height?: Number;
	mpeg4_duration?: Number;
	thumb_url?: string;
	thumb_mime_type?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultVideo {
	type?: string;
	id?: string;
	video_url?: string;
	mime_type?: string;
	thumb_url?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	video_width?: Number;
	video_height?: Number;
	video_duration?: Number;
	description?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultAudio {
	type?: string;
	id?: string;
	audio_url?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	performer?: string;
	audio_duration?: Number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultVoice {
	type?: string;
	id?: string;
	voice_url?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	voice_duration?: Number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultDocument {
	type?: string;
	id?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	document_url?: string;
	mime_type?: string;
	description?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: Number;
	thumb_height?: Number;
}

export interface InlineQueryResultLocation {
	type?: string;
	id?: string;
	latitude?: number;
	longitude?: number;
	title?: string;
	horizontal_accuracy?: number;
	live_period?: Number;
	heading?: Number;
	proximity_alert_radius?: Number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: Number;
	thumb_height?: Number;
}

export interface InlineQueryResultVenue {
	type?: string;
	id?: string;
	latitude?: Number;
	longitude?: Number;
	title?: string;
	address?: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: Number;
	thumb_height?: Number;
}

export interface InlineQueryResultContact {
	type?: string;
	id?: string;
	phone_number?: string;
	first_name?: string;
	last_name?: string;
	vcard?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: Number;
	thumb_height?: Number;
}

export interface InlineQueryResultGame {
	type?: string;
	id?: string;
	game_short_name?: string;
	reply_markup?: InlineKeyboardMarkup;
}

export interface InlineQueryResultCachedPhoto {
	type?: string;
	id?: string;
	photo_file_id?: string;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedGif {
	type?: string;
	id?: string;
	gif_file_id?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedMpeg4Gif {
	type?: string;
	id?: string;
	mpeg4_file_id?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedSticker {
	type?: string;
	id?: string;
	sticker_file_id?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedDocument {
	type?: string;
	id?: string;
	title?: string;
	document_file_id?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVideo {
	type?: string;
	id?: string;
	video_file_id?: string;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVoice {
	type?: string;
	id?: string;
	voice_file_id?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedAudio {
	type?: string;
	id?: string;
	audio_file_id?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InputMessageContent extends InputTextMessageContent, InputLocationMessageContent, InputVenueMessageContent, InputContactMessageContent {

}

export interface InputTextMessageContent {
	message_text?: string;
	parse_mode?: string;
	entities?: Array<MessageEntity>;
	disable_web_page_preview?: Boolean;
}

export interface InputLocationMessageContent {
	latitude?: Number;
	longitude?: Number;
	horizontal_accuracy?: number;
	live_period?: Number;
	heading?: Number;
	proximity_alert_radius?: Number;
}

export interface InputVenueMessageContent {
	latitude?: Number;
	longitude?: Number;
	title?: string;
	address?: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
}

export interface InputContactMessageContent {
	phone_number?: string;
	first_name?: string;
	last_name?: string;
	vcard?: string;
}

export interface ChosenInlineResult {
	result_id?: string;
	from?: User;
	location?: Location;
	inline_message_id?: string;
	query?: string;
}

export interface SuccessfulPayment {
	currency?: string;
	total_amount?: Number;
	invoice_payload?: string;
	shipping_option_id?: string;
	order_info?: OrderInfo;
	telegram_payment_charge_id?: string;
	provider_payment_charge_id?: string
}

export interface OrderInfo {
	name?: string;
	phone_number?: string;
	email?: string;
	shipping_address?: ShippingAddress
}

export interface ShippingAddress {
	country_code?: string;
	state?: string;
	city?: string;
	street_line1?: string;
	street_line2?: string;
	post_code?: string
}

export interface PassportFile {
	file_id?: string;
	file_unique_id?: string;
	file_size?: Number;
	file_date?: Number
}

export interface EncryptedPassportElement {
	type?: string;
	data?: string;
	phone_number?: string;
	email?: string;
	files?: Array<PassportFile>;
	front_side?: PassportFile;
	reverse_side?: PassportFile;
	selfie?: PassportFile;
	translation?: Array<PassportFile>;
	hash?: string
}

export interface PassportData {
	data?: Array<EncryptedPassportElement>;
	credentials?: EncryptedCredentials
}

export interface EncryptedCredentials {
	data?: string;
	hash?: string;
	secret?: string
}

export interface Sticker {
	file_id?: string;
	file_unique_id?: string;
	width?: Number;
	height?: Number;
	is_animated?: Boolean;
	thumb?: PhotoSize;
	emoji?: string;
	set_name?: string;
	mask_position?: MaskPosition;
	file_size?: Number
}

export interface MaskPosition {
	point?: string;
	x_shift?: number;
	y_shift?: number;
	scale?: number
}

export interface Invoice {
	title?: string;
	description?: string;
	start_parameter?: string;
	currency?: string;
	total_amount?: Number
}


export interface MessageId {
	message_id?: Number
}

export interface MessageEntity {
	type: string | "mention" | "hashtag" | "cashtag" | "bot_command" | "url" | "email" | "phone_number" | "bold" | "italic" | "underline" | "strikethrough" | "code" | "pre" | "text_link" | "text_mention";
	offset: Number;
	length: Number;
	url?: string;
	user?: User;
	language?: string
}

export interface PhotoSize {
	file_id?: string;
	file_unique_id?: string;
	width?: Number;
	height?: Number;
	file_size?: Number
}

export interface Animation {
	file_id?: string;
	file_unique_id?: string;
	width?: Number;
	height?: Number;
	duration?: Number;
	thumb?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: Number
}

export interface Audio {
	file_id?: string;
	file_unique_id?: string;
	duration?: Number;
	performer?: string;
	title?: string;
	file_name?: string;
	mime_type?: string;
	file_size?: Number;
	thumb?: PhotoSize
}

export interface Document {
	file_id?: string;
	file_unique_id?: string;
	thumb?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: Number
}

export interface Video {
	file_id?: string;
	file_unique_id?: string;
	width?: Number;
	height?: Number;
	duration?: Number;
	thumb?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: Number
}

export interface VideoNote {
	file_id?: string;
	file_unique_id?: string;
	length?: Number;
	duration?: Number;
	thumb?: PhotoSize;
	file_size?: Number
}

export interface Voice {
	file_id?: string;
	file_unique_id?: string;
	duration?: Number;
	mime_type?: string;
	file_size?: Number
}

export interface Contact {
	phone_number?: string;
	first_name?: string;
	last_name?: string;
	user_id?: Number;
	vcard?: string
}

export interface Dice {
	emoji?: string;
	value?: Number
}

export interface PollOption {
	text?: string;
	voter_count?: Number
}

export interface PollAnswer {
	poll_id?: string;
	user?: User;
	option_ids?: Array<Number>
}

export interface Poll {
	id?: string;
	question?: string;
	options?: Array<PollOption>;
	total_voter_count?: Number;
	is_closed?: Boolean;
	is_anonymous?: Boolean;
	type?: string;
	allows_multiple_answers?: Boolean;
	correct_option_id?: Number;
	explanation?: string;
	explanation_entities?: Array<MessageEntity>;
	open_period?: Number;
	close_date?: Number
}

export interface Location {
	longitude?: Number;
	latitude?: Number;
	horizontal_accuracy?: number;
	live_period?: Number;
	heading?: Number;
	proximity_alert_radius?: Number
}

export interface Venue {
	location?: Location;
	title?: string;
	address?: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string
}

export interface ProximityAlertTriggered {
	traveler?: User;
	watcher?: User;
	distance?: Number
}

export interface UserProfilePhotos {
	total_count?: Number;
	photos?: Array<Array<PhotoSize>>
}

export interface File {
	file_id?: string;
	file_unique_id?: string;
	file_size?: Number;
	file_path?: string
}

export interface ReplyKeyboardMarkup {
	keyboard?: Array<Array<KeyboardButton>>;
	resize_keyboard?: Boolean;
	one_time_keyboard?: Boolean;
	selective?: Boolean
}

export interface KeyboardButton {
	text?: string;
	request_contact?: Boolean;
	request_location?: Boolean;
	request_poll?: KeyboardButtonPollType
}

export interface KeyboardButtonPollType {
	type?: "quiz" | "regular"
}

export interface ReplyKeyboardRemove {
	remove_keyboard?: Boolean;
	selective?: Boolean
}

export interface InlineKeyboardMarkup {
	inline_keyboard?: Array<Array<InlineKeyboardButton>>
}

export interface InlineKeyboardButton {
	text: string;
	url?: string;
	login_url?: LoginUrl;
	callback_data?: string;
	switch_inline_query?: string;
	switch_inline_query_current_chat?: string;
	callback_game?: Game;
	pay?: Boolean
}

export interface LoginUrl {
	url?: string;
	forward_text?: string;
	bot_username?: string;
	request_write_access?: Boolean
}

export interface CallbackQuery {
	id: string;
	from: User;
	message?: Message;
	inline_message_id?: string;
	chat_instance: string;
	data?: string;
	game_short_name?: string
}

export interface ForceReply {
	force_reply?: Boolean;
	selective?: Boolean
}

export interface ChatPhoto {
	small_file_id?: string;
	small_file_unique_id?: string;
	big_file_id?: string;
	big_file_unique_id?: string
}

export interface ChatMember {
	user?: User;
	status?: string;
	custom_title?: string;
	is_anonymous?: Boolean;
	can_be_edited?: Boolean;
	can_post_messages?: Boolean;
	can_edit_messages?: Boolean;
	can_delete_messages?: Boolean;
	can_restrict_members?: Boolean;
	can_promote_members?: Boolean;
	can_change_info?: Boolean;
	can_invite_users?: Boolean;
	can_pin_messages?: Boolean;
	is_member?: Boolean;
	can_send_messages?: Boolean;
	can_send_media_messages?: Boolean;
	can_send_polls?: Boolean;
	can_send_other_messages?: Boolean;
	can_add_web_page_previews?: Boolean;
	until_date?: Number
}

export interface ChatPermissions {
	can_send_messages?: Boolean;
	can_send_media_messages?: Boolean;
	can_send_polls?: Boolean;
	can_send_other_messages?: Boolean;
	can_add_web_page_previews?: Boolean;
	can_change_info?: Boolean;
	can_invite_users?: Boolean;
	can_pin_messages?: Boolean
}

export interface ChatLocation {
	location?: Location;
	address?: string
}

export interface BotCommand {
	command?: string;
	description?: string
}

export interface ResponseParameters {
	migrate_to_chat_id?: Number;
	retry_after?: Number
}

export interface InputMediaPhoto {
	type?: string;
	media?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>
}

export interface InputMediaVideo {
	type?: string;
	media?: string;
	thumb?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	width?: Number;
	height?: Number;
	duration?: Number;
	supports_streaming?: Boolean
}

export interface InputMediaAnimation {
	type?: string;
	media?: string;
	thumb?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	width?: Number;
	height?: Number;
	duration?: Number
}

export interface InputMediaAudio {
	type?: string;
	media?: string;
	thumb?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	duration?: Number;
	performer?: string;
	title?: string
}

export interface InputMediaDocument {
	type?: string;
	media?: string;
	thumb?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: Array<MessageEntity>;
	disable_content_type_detection?: Boolean
}

export interface SendMessage {
	chat_id: Number|string;
	text: string;
	parse_mode?: string;
	entities?: Array<MessageEntity>;
	disable_web_page_preview?: Boolean;
	disable_notification?: Boolean;
	reply_to_message_id?: Number;
	allow_sending_without_reply?: Boolean;
	reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
}

export interface EditMessageReplyMarkup {
	chat_id?: Number|string;
	message_id?: Number;
	inline_message_id?: string;
	reply_markup?: InlineKeyboardMarkup;
}

export interface AnswerCallbackQuery {
	callback_query_id: String;
	text?: String;
	show_alert?: Boolean;
	url?: String;
	cache_time?: Number;
}