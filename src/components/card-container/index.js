import React from "react";
import Card from "../card";
import Button from "@material-ui/core/Button";
import "./index.css";

class cardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        [
          {
            frontEndPic: "",
            frontEndDesc: "This Is the front end 1",
            title: "Front End UI"
          },
          {
            backEndPic: "This is the back end 1",
            backEndDesc: "this is the back end 1",
            title: "Server Side API and Database"
          }
        ],
        [
          {
            frontEndPic: "",
            frontEndDesc: "This is the front end 2",
            title: "Front End UI 2"
          },
          {
            backEndPic: "This is the back end 2",
            backEndDesc: "this is the back end 2",
            title: "Server Side API and Database"
          }
        ],
        [
          {
            frontEndPic: "",
            frontEndDesc: "This is the front end 3",
            title: "Front End UI 3"
          },
          {
            backEndPic: "This is the back end 3",
            backEndDesc: "this is the back end ",
            title: "Server Side API and Database"
          }
        ]
      ],
      startInd: 0
    };
  }

  selectThreeItems = startInd => {
    this.state.cards.map((_, index) =>
      index >= startInd || index < startInd + 3 ? (
        <Card
          style={{ margin: "20px auto" }}
          heartClick={this.fillHeart}
          cardId={index}
        />
      ) : (
        ""
      )
    );
  };

  fillHeart = id => {
    const cardToFind = this.state.cards.find(item => item.id === id);
    const index = this.state.cards.map(x => x.id).indexOf(id);
    // const mixed = this.state.cards.findIndex(card => card.id === id);
    //this.state.cards.findIndex(card => card.id === id) - this does the above in one line... just returns

    // Math.max(Math.min(state.page + amount, Math.ceil(state.cards.length /3) - 1 )
    // give me the minimum of what a number can be and the maximum of what it can be
    this.setState(
      {
        cards: [
          ...this.state.cards.slice(0, index),
          { ...cardToFind, is_liked: !cardToFind.is_liked },
          ...this.state.cards.slice(index + 1)
        ]
      },
      console.log(this.state.cards)
    );
  };

  render() {
    return (
      <div className="container">
        <div className="buttonContainer">
          <Button
            variant="outlined"
            className="nextPrevButton"
            color="secondary"
            onClick={() => {
              return this.setState({ startInd: this.state.startInd - 1 });
            }}
          >
            &lt;
          </Button>
        </div>
        {this.state.cards
          .slice(this.state.startInd, this.state.startInd + 1)
          .map((item, index) =>
            item.map((i, ind) => {
              console.log(item);
              console.log(i);
              return (
                <Card
                  key={ind}
                  item={i}
                  style={{ margin: "20px auto" }}
                  heartClick={this.fillHeart}
                />
              );
            })
          )}

        <div className="buttonContainer">
          <Button
            color="secondary"
            variant="outlined"
            className="nextPrevButton"
            onClick={() => {
              return this.setState({ startInd: this.state.startInd + 1 });
            }}
          >
            &gt;
          </Button>
        </div>
      </div>
    );
  }
}

export default cardContainer;
