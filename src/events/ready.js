module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    client.user.setActivity('activity', { type: 'LISTENING' }); // TODO change activity to current chosen song
  },
};
