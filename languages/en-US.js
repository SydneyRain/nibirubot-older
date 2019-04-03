 /* en-US language file 
 * This is the English (United States) language file. If you want to translate Nibiru into another language,
 * you can use this as a starting point!
 */

const { Language } = require('klasa');

module.exports = class extends Language {

      constructor(...args) {
      super(...args,);

      this.language = {
            DEFAULT: (key) => `${key} has not been localized for en-US yet.`,

            //8-Ball
            EIGHTBALL_ERROR: 'Usage: ``8ball [question]`` - Ask the 8-Ball a question.\nExample: ``8ball Will I ever find love?`` - Asks the magic 8-ball if you will ever find love.',
            //Achievement
            ACHIEVEMENT_ERROR: 'Usage: ``achievement [text]`` - Generates an achievement get message like Minecraft.\nExample: ``achievement Time To Strike`` - Generates a Minecraft achievement that says "Time To Strike".',
            //Cookie
            COOKIE_ERROR: 'Usage: ``cookie [user]`` - Gives a user a cookie.\nExample: ``cookie Nibiru`` - Gives a cookie to Nibiru.',
            //Cowsay
            COWSAY_ERROR: 'Usage: ``cowsay [text]`` - Makes a cow say something.\nExample: ``cowsay Have you moooed today?`` - Makes the cow say "Have you moooed today?".',
            //Reverse
            REVERSE_ERROR: 'Usage: ``revert [text]`` - Reverts any text you input.\nExample: ``revert Hello world`` - Prints "dlrow olleH", or "Hello world" backwards.',

            //Descriptions
            ACHIEVEMENT_DESCRIPTION: 'Generates an "Achievement Get" message, like Minecraft.',
            ACHIEVEMENT_EXTENDEDHELP: '+achievement Time To Strike`` :: Generates a Minecraft achievement that says "Time To Strike".',
            AUTOROLE_DESCRIPTION: 'Automatically adds a role to a user when they join the server.',
            AUTOROLE_EXTENDEDHELP: '+autorole enable Guests :: Enables autorole, gives any new user who joins the server the "Guests" role (if the role exists and I have proper permissions).\n+autorole disable :: Disables autorole, will not give any new users who join a role if it was set.\n+autorole view :: View the autorole details.',
            BALANCE_DESCRIPTION: 'Displays your NibirBucks(TM) balance, including cash on hand, bank account balance and net worth.',
            BALANCE_EXTENDEDHELP: '+balance :: Displays your balance.\n+balance @[user] :: Displays another users balance',
            COINFLIP_DESCRIPTION: 'Flips a coin.',
            COINFLIP_EXTENDEDHELP: '+coinflip :: Flips a coin.',
            COOKIE_DESCRIPTION: 'Gives somebody a cookie! :cookie:',
            COOKIE_EXTENDEDHELP: '+cookie @[user] :: Gives a cookie to a user.',
            COWSAY_DESCRIPTION: 'Makes a cow say something.',
            COWSAY_EXTENDEDHELP: '+cowsay Have you moooed today? :: Makes an ASCII cow say "Have you moooed today?".',
            DAILY_DESCRIPTION: 'Redeems your daily 1200 NibiruBucks™!',
            DAILY_EXTENDEDHELP: '+daily :: Redeems your daily 1200 NibiruBucks.\n+daily @[user] :: Redeems your daily 1200 NibiruBucks towards another user.',
            DEPOSIT_DESCRIPTION: 'Deposit NibiruBucks into your bank account.',
            DEPOSIT_EXTENDEDHELP: '+deposit [amount] :: Deposits however much you specify into your bank account.',
            EIGHTBALL_DESCRIPTION: 'Ask the magic 8-Ball about your future.',
            EIGHTBALL_EXTENDEDHELP: '+8ball Will I find love? :: Asks the 8-ball "Will I find love?"',
            INSULT_DESCRIPTION: 'Insult somebody you don\'t like.',
            INSULT_EXTENDEDHELP: '+insult @[user] :: Will insult a user.',
            RANDOMCOLOR_DESCRIPTION: 'Generates a random hex color.',
            RANDOMCOLOR_EXTENDEDHELP: '+randomcolor :: Prints a random hex color."',
            REVERSE_DESCRIPTION: 'Reverses whatever text you input.',
            REVERSE_EXTENDEDHELP: '+reverse hello world :: reverses the text "hello world".',
            STARBOARD_DESCRIPTION: 'Manages the starboard configuration for this server.',
            STARBOARD_EXTENDEDHELP: '+starboard enable #starboard :: Enables the Starboard, and sets the Starboard channel to "#general".\n+starboard disable :: Disables the starboard.\n+starboard limit 5 :: Sets the starboard limit to 5 (how many stars a message will need to get before it gets added to the Starboard).',
            WAIFU_DESCRIPTION: 'Prints a randomly generated waifu from www.thiswaifudoesnotexist.net.',
            WAIFU_EXTENDEDHELP: '+waifu :: Prints a random waifu.',
            WITHDRAW_DESCRIPTION: 'Withdraws NibiruBucks from your bank account.',
            WITHDRAW_EXTENDEDHELP: '+withdraw [amount] :: Withdraws however much you specify from your bank account.',

            //Autorole
            AUTOROLE_ENABLED_ERROR: 'Usage: ``autorole enable [role name]`` :: Enables autorole. Users will automatically get this role after joining the server.\nExample: ``autorole enable Guests`` :: Will give everyone who joins a role called "Guests", if it exists.',
            AUTOROLE_ENABLED_SUCCESS: 'Autorole for this server has been enabled. Role set to: ',
            AUTOROLE_DISABLED_ERROR: ':no_entry: Autorole has already been disabled!\nTo enable it, type ``+autorole enable [role name]``',
            AUTOROLE_DISABLED_SUCCESS: 'Autorole for this server has been disabled.',

            //Bank
            ERROR_INVALID_AMOUNT_DEPOSIT: 'You specified an invalid amount! You must deposit at least 1 NibiruBuck!',
            ERROR_INVALID_MONEY_DEPOSIT: 'You do not have that much NibiruBucks to deposit!',
            ERROR_INVALID_AMOUNT_WITHDRAW: 'You specified an invalid amount! You must withdraw at least 1 NibiruBuck!',
            ERROR_INVALID_MONEY_WITHDRAW: 'You do not have that much NibiruBucks to withdraw!',

            //Starboard
            STARBOARD_ENABLED_SUCCESS: 'Successfully enabled the Starboard in #',
            STARBOARD_ENABLED_ERROR: ':no_entry: The Starboard has already been enabled!\nTo disable it, type ``+starboard disable``',
            STARBOARD_DISABLED_SUCCESS: 'Successfully disabled the Starboard.',
            STARBOARD_DISABLED_ERROR: ':no_entry: The Starboard has already been disabled!\nTo enable it, type ``+starboard enable [channel name]``',
            STARBOARD_LIMIT_ERROR: 'Usage: ``starboard limit [number]`` :: Sets how many stars a message must have before being added onto the Starboard.\nExample: ``starboard limit 5`` :: Will set the amount to 5.',
            STARBOARD_LIMIT_SUCCESS: 'Starboard limit has been set to ',
            
            //Misc
            ERROR_ALREADY_REDEEMED: 'You have already redeemed your daily amount! You may redeem again in: ',
            NSFW_ONLY: ':no_entry: This command may only be used in NSFW channels.',

            DEFAULT_LANGUAGE: 'Default Language'
		};
	}

};