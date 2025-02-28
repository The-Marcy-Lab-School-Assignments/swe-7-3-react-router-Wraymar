const BotClassIcon = (bot_class) => {
  switch (bot_class) {
    case "Assault":
      return <i className="icon military" />;
    case "Defender":
      return <i className="icon shield" />;
    case "Support":
      return <i className="icon ambulance" />;
    default:
      return <div />;
  }
}

export default BotClassIcon;