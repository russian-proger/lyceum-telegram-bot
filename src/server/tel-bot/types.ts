export interface User {
	id?: Number;
	is_bot?: Boolean;
	first_name?: String;
	last_name?: String;
	username?: String;
	language_code?: String;
	can_join_groups?: Boolean;
	can_read_all_group_messages?: Boolean;
	supports_inline_queries?: Boolean
}

export interface Chat {
	id?: Number;
	type?: String;
	title?: String;
	username?: String;
	first_name?: String;
	last_name?: String;
	photo?: ChatPhoto;
	bio?: String;
	description?: String;
	invite_link?: String;
	pinned_message?: Message;
	permissions?: ChatPermissions;
	slow_mode_delay?: Number;
	sticker_set_name?: String;
	can_set_sticker_set?: Boolean;
	linked_chat_id?: Number;
	location?: ChatLocation
}

export interface Game {
	title?: String;
	description?: String;
	photo?: Array<PhotoSize>;
	text?: String;
	text_entities?: Array<MessageEntity>;
	animation?: Animation
}

export interface Message {
	message_id?: Number;
	from?: User;
	sender_chat?: Chat;
	date?: Number;
	chat?: Chat;
	forward_from?: User;
	forward_from_chat?: Chat;
	forward_from_message_id?: Number;
	forward_signature?: String;
	forward_sender_name?: String;
	forward_date?: Number;
	reply_to_message?: Message;
	via_bot?: User;
	edit_date?: Number;
	media_group_id?: String;
	author_signature?: String;
	text?: String;
	entities?: Array<MessageEntity>;
	animation?: Animation;
	audio?: Audio;
	document?: Document;
	photo?: Array<PhotoSize>;
	sticker?: Sticker;
	video?: Video;
	video_note?: VideoNote;
	voice?: Voice;
	caption?: String;
	caption_entities?: Array<MessageEntity>;
	contact?: Contact;
	dice?: Dice;
	game?: Game;
	poll?: Poll;
	venue?: Venue;
	location?: Location;
	new_chat_members?: Array<User>;
	left_chat_member?: User;
	new_chat_title?: String;
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
	connected_website?: String;
	passport_data?: PassportData;
	proximity_alert_triggered?: ProximityAlertTriggered;
	reply_markup?: InlineKeyboardMarkup
}

export interface SuccessfulPayment {
	currency?: String;
	total_amount?: Number;
	invoice_payload?: String;
	shipping_option_id?: String;
	order_info?: OrderInfo;
	telegram_payment_charge_id?: String;
	provider_payment_charge_id?: String
}

export interface OrderInfo {
	name?: String;
	phone_number?: String;
	email?: String;
	shipping_address?: ShippingAddress
}

export interface ShippingAddress {
	country_code?: String;
	state?: String;
	city?: String;
	street_line1?: String;
	street_line2?: String;
	post_code?: String
}

export interface PassportFile {
	file_id?: String;
	file_unique_id?: String;
	file_size?: Number;
	file_date?: Number
}

export interface EncryptedPassportElement {
	type?: String;
	data?: String;
	phone_number?: String;
	email?: String;
	files?: Array<PassportFile>;
	front_side?: PassportFile;
	reverse_side?: PassportFile;
	selfie?: PassportFile;
	translation?: Array<PassportFile>;
	hash?: String
}

export interface PassportData {
	data?: Array<EncryptedPassportElement>;
	credentials?: EncryptedCredentials
}

export interface EncryptedCredentials {
	data?: String;
	hash?: String;
	secret?: String
}

export interface Sticker {
	file_id?: String;
	file_unique_id?: String;
	width?: Number;
	height?: Number;
	is_animated?: Boolean;
	thumb?: PhotoSize;
	emoji?: String;
	set_name?: String;
	mask_position?: MaskPosition;
	file_size?: Number
}

export interface MaskPosition {
	point?: String;
	x_shift?: number;
	y_shift?: number;
	scale?: number
}

export interface Invoice {
	title?: String;
	description?: String;
	start_parameter?: String;
	currency?: String;
	total_amount?: Number
}


export interface MessageId {
	message_id?: Number
}

export interface MessageEntity {
	type?: String;
	offset?: Number;
	length?: Number;
	url?: String;
	user?: User;
	language?: String
}

export interface PhotoSize {
	file_id?: String;
	file_unique_id?: String;
	width?: Number;
	height?: Number;
	file_size?: Number
}

export interface Animation {
	file_id?: String;
	file_unique_id?: String;
	width?: Number;
	height?: Number;
	duration?: Number;
	thumb?: PhotoSize;
	file_name?: String;
	mime_type?: String;
	file_size?: Number
}

export interface Audio {
	file_id?: String;
	file_unique_id?: String;
	duration?: Number;
	performer?: String;
	title?: String;
	file_name?: String;
	mime_type?: String;
	file_size?: Number;
	thumb?: PhotoSize
}

export interface Document {
	file_id?: String;
	file_unique_id?: String;
	thumb?: PhotoSize;
	file_name?: String;
	mime_type?: String;
	file_size?: Number
}

export interface Video {
	file_id?: String;
	file_unique_id?: String;
	width?: Number;
	height?: Number;
	duration?: Number;
	thumb?: PhotoSize;
	file_name?: String;
	mime_type?: String;
	file_size?: Number
}

export interface VideoNote {
	file_id?: String;
	file_unique_id?: String;
	length?: Number;
	duration?: Number;
	thumb?: PhotoSize;
	file_size?: Number
}

export interface Voice {
	file_id?: String;
	file_unique_id?: String;
	duration?: Number;
	mime_type?: String;
	file_size?: Number
}

export interface Contact {
	phone_number?: String;
	first_name?: String;
	last_name?: String;
	user_id?: Number;
	vcard?: String
}

export interface Dice {
	emoji?: String;
	value?: Number
}

export interface PollOption {
	text?: String;
	voter_count?: Number
}

export interface PollAnswer {
	poll_id?: String;
	user?: User;
	option_ids?: Array<Number>
}

export interface Poll {
	id?: String;
	question?: String;
	options?: Array<PollOption>;
	total_voter_count?: Number;
	is_closed?: Boolean;
	is_anonymous?: Boolean;
	type?: String;
	allows_multiple_answers?: Boolean;
	correct_option_id?: Number;
	explanation?: String;
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
	title?: String;
	address?: String;
	foursquare_id?: String;
	foursquare_type?: String;
	google_place_id?: String;
	google_place_type?: String
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
	file_id?: String;
	file_unique_id?: String;
	file_size?: Number;
	file_path?: String
}

export interface ReplyKeyboardMarkup {
	keyboard?: Array<Array<KeyboardButton>>;
	resize_keyboard?: Boolean;
	one_time_keyboard?: Boolean;
	selective?: Boolean
}

export interface KeyboardButton {
	text?: String;
	request_contact?: Boolean;
	request_location?: Boolean;
	request_poll?: KeyboardButtonPollType
}

export interface KeyboardButtonPollType {
	type?: String
}

export interface ReplyKeyboardRemove {
	remove_keyboard?: Boolean;
	selective?: Boolean
}

export interface InlineKeyboardMarkup {
	inline_keyboard?: Array<Array<InlineKeyboardButton>>
}

export interface InlineKeyboardButton {
	text?: String;
	url?: String;
	login_url?: LoginUrl;
	callback_data?: String;
	switch_inline_query?: String;
	switch_inline_query_current_chat?: String;
	callback_game?: Game;
	pay?: Boolean
}

export interface LoginUrl {
	url?: String;
	forward_text?: String;
	bot_username?: String;
	request_write_access?: Boolean
}

export interface CallbackQuery {
	id?: String;
	from?: User;
	message?: Message;
	inline_message_id?: String;
	chat_instance?: String;
	data?: String;
	game_short_name?: String
}

export interface ForceReply {
	force_reply?: Boolean;
	selective?: Boolean
}

export interface ChatPhoto {
	small_file_id?: String;
	small_file_unique_id?: String;
	big_file_id?: String;
	big_file_unique_id?: String
}

export interface ChatMember {
	user?: User;
	status?: String;
	custom_title?: String;
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
	address?: String
}

export interface BotCommand {
	command?: String;
	description?: String
}

export interface ResponseParameters {
	migrate_to_chat_id?: Number;
	retry_after?: Number
}

export interface InputMediaPhoto {
	type?: String;
	media?: String;
	caption?: String;
	parse_mode?: String;
	caption_entities?: Array<MessageEntity>
}

export interface InputMediaVideo {
	type?: String;
	media?: String;
	thumb?: String;
	caption?: String;
	parse_mode?: String;
	caption_entities?: Array<MessageEntity>;
	width?: Number;
	height?: Number;
	duration?: Number;
	supports_streaming?: Boolean
}

export interface InputMediaAnimation {
	type?: String;
	media?: String;
	thumb?: String;
	caption?: String;
	parse_mode?: String;
	caption_entities?: Array<MessageEntity>;
	width?: Number;
	height?: Number;
	duration?: Number
}

export interface InputMediaAudio {
	type?: String;
	media?: String;
	thumb?: String;
	caption?: String;
	parse_mode?: String;
	caption_entities?: Array<MessageEntity>;
	duration?: Number;
	performer?: String;
	title?: String
}

export interface InputMediaDocument {
	type?: String;
	media?: String;
	thumb?: String;
	caption?: String;
	parse_mode?: String;
	caption_entities?: Array<MessageEntity>;
	disable_content_type_detection?: Boolean
}

export interface SendMessage {
	chat_id?: String;
	text?: String;
	parse_mode?: String;
	entities?: Array<MessageEntity>;
	disable_web_page_preview?: Boolean;
	disable_notification?: Boolean;
	reply_to_message_id?: Number;
	allow_sending_without_reply?: Boolean;
	reply_markup?: ForceReply;
}