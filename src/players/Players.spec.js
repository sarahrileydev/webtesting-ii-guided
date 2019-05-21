import React from "react";
import { render, cleanup } from "react-testing-library";
import Players from "./Players";
import "jest-dom/extend-expect";

describe("<Players/>", () => {
  it('should render "no players available" when none provided from props', () => {
    const { getByText } = render(<Players />);

    getByText(/no players/i);
    cleanup();
  });

  it('should render "no players available" when no players passed in', () => {
    const { queryByText } = render(<Players />);
    //query by text will return null but it won't fail the test
    //so we need to do an assertion
    expect(queryByText(/no players/i)).not.toBeNull();
    expect(queryByText(/no players/i)).toBeInTheDocument();
    cleanup();
  });
  
  it('should render the provided list of players', () => {
    const players = [
      {id: 1, name: 'Sam'},
      {id: 2, name: 'Bilbo'},
      {id: 3, name: 'Frodo'}
    ]

    // uses the data-testid property
    const {getAllByTestId} = render(<Players players={players}/>);

    const playerNames = getAllByTestId('player-name').map(n => n.textContent);

    expect(playerNames).toHaveLength(players.length);
    const names = players.map(p => p.name) // array of names passed in

    expect(playerNames).toEqual(names); //for arrays and objects you have to use toEqual not toBe
  })
});
