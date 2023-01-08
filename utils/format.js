const format = (text, status) => {
  var format = {
    "{online}": status.players.online,
    "{max}": status.players.max,
  };
  text = text.replace(/{online}|{max}/gi, (matched) => format[matched]);
  return text;
};

module.exports = { format };
