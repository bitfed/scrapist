

var postingData = [
  {
    "id": "5070966528",
    "title": "/ 144ft2 - Room near Balboa Bart Station - separate entrance (mission district)",
    "neighborhood": " (mission district)",
    "description": "\n        $850 \none  rooms available 15 min walking to Balboa Bart Station.\nThis is a downstairs two bedroom, one bath unit and has a separate entrance..\nThis unit is remodeled with granite counter kitchen, etc..\nTwo rooms are sharing one bathroom.  \nIf you need a designated parking space, add $50..\n\nPlease reply with text or email with your full name and detail about yourself.\nif texting, please also indicate the location as I have several postings.\n\nThanks\nLynn\n\n\n\n    ",
    "price": "$850",
    "url": "http://sfbay.craigslist.org/sfc/roo/5077166380.html"
  }, {
    "id": "5080489287",
    "title": "room share (lower nob hill)",
    "neighborhood": " (lower nob hill)",
    "description": "\n        Hi! \n\nWe're looking for someone to move in to our SHARED room beginning July 1. Rent is $480 and there is a $480 deposit. We split utilities and household costs, so factor in an extra $20-$50. \n\nNo overnight guests!\n\nSend us a link to your FB or LinkedIn, please, so we can see if we think you would be a cool roommate.\n\nOur old roommate left her bed here, but she wants someone to buy it or she's going to pick it up, so the spot is essentially unfurnished. I have a futon you can use though for a bit, but not permanently. \n\nI have spare bedding and towels and we have a fully stocked (equipment-wise) kitchen you can use if need be.\n\nApartment has one bathroom. \n\nBike friendly! \n\nWe are all busy, but we are all friends as well as roommates, so we want someone else like that! \n\nThere's an elevator!\n    ",
    "price": "$480",
    "url": "http://sfbay.craigslist.org/sfc/roo/5077166380.html"
  }, {
    "id": "5079830075",
    "title": "Private Room Available in spacious house ! (ingleside / SFSU / CCSF)",
    "neighborhood": " (ingleside / SFSU / CCSF)",
    "description": "\n        Hello! \n\nTwo of our roommates is leaving and we are looking for replacements. This ad is for the private bedroom.\nThe home is a 3 bedroom 2 bathroom place with a spacious kitchen/living room area. we also have a balcony and rooftop access (once in a while we have BBQs and such) The monthly rent is 800 and utilities usually come out to about 30-50 a month.\nWe are both women in our mid 20s and looking for the same. Though maturity is what matters most.\n\nMe: Psychology major (spent 3 years studying film before making this 180 so I'm a pretty big movie buff as well). Hip hop/contemporary dancer. Writer. Singer. Painter. Work downtown at a law firm as a legal assistant. Extremely empathic and kind though very blunt and to the point when needed.\nJ: Nursing major, the sweetest girl you will ever meet, really. extremely funny! Usually spends her time at the beach or visiting family. She also spends a lot of time at her boyfriends house as well so we don't see her much. Works as a hostess DT. (P.S she's in the master bedroom which is a roomshare the other woman currently there is leaving as well to travel! $550 if interested in the roomshare please let me know.)\n\nWe are looking for a woman who is also clean and respectful. Someone who works and/or goes to school and enjoys being productive. Please pay your own bills-I.E Independent.\nWe like to go out once in a while, but do not bring the party home. Usually the house is pretty quiet on weekdays. Overnight guests are fine (no live in significant others please). \n \nSorry no pets as per landlords request\n\nPlease include a FB/Linkedin/Instagram link if available\n\n\nHappy house hunting everyone!\n    ",
    "price": "$800",
    "url": "http://sfbay.craigslist.org/sfc/roo/5077166380.html"
  }
];

var RemovePostingButton = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.clickHandler} className="pure-button remove-post">Remove</button>
    );
  }
});
var Posting = React.createClass({
  render: function () {
  var cssClass = this.state.showPost ? 'posting' : 'posting-hidden';
    return (
      <div className={cssClass} key={this.props.posting.id}>
        <p><a href={this.props.posting.url}>{this.props.posting.id}</a> {this.props.posting.price}</p>
        <h2>{this.props.posting.title} - {this.props.posting.neighborhood}</h2>
        <div className="description">{this.props.posting.description}</div>
        <RemovePostingButton clickHandler={this.removePosting} />
      </div>

    );
  },
  getInitialState: function () {
    return {
      showPost: true
    };
  },
  removePosting: function () {
    this.setState({ showPost: false });
    //then remove posting from database
  }
});

var PostingList = React.createClass({
  render: function () {
    var postings = this.props.postings,
        postingList = [];

    postings.map(function (posting) {
      postingList.push(<Posting key={posting.id} posting={posting} />);
    });

    return (
      <div className="posting-list">
        {postingList}
      </div>
    );
  }
});

React.render(
  <PostingList postings={postingData} />,
  document.getElementById('main')
);
