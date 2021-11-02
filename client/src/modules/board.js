/* eslint-disable array-callback-return */

export const WRITE = 'board/WRITE';
export const READPOST = "'/board/READPOST";
export const LIKE = 'board/LIKE';
export const READNUM = 'board/READNUM';
export const INSERT = 'board/INSERT';

let id = 1;

export const insert = (input, text) => ({
  type: INSERT,
  payload: {
    id: id++,
    input,
    text,
    like: 0,
    clicked: false,

    comment: 0,
    view: 0,
    img: 'sdf',
  },
});

export const likes = (id, like) => ({
  type: LIKE,
  payload: {
    id,
  },
});

export const readpost = (data) => ({
  type: READPOST,
  payload: {
    data: data,
  },
});

const initialState = {
  read: [
    {
      category: 'sample3',
      comment: 0,
      content: 'sample3',
      createdAt: '2021-10-30T06:35:57.000Z',
      id: 3,
      img: 'sample3',
      like: 0,
      profile_img: null,
      title: 'sample3',
      updatedAt: '2021-11-02T08:11:00.000Z',
      username: '성현테스트',
      view: 10,
      writerId: 2,
    },
  ],

  items: [
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
  ],
};

function board(state = initialState, action) {
  switch (action.type) {
    // case LIKE: {
    //   let idx = state.items.findIndex((el) => el.id === action.payload.id);
    //   return {
    //     ...state,
    //     items: state.items.map((el, index) => {
    //       if (index === idx && el.clicked === false) {
    //         el.like++;
    //         el.clicked = true;
    //       } else if (index === idx && el.clicked === true) {
    //         el.like--;
    //         el.clicked = false;
    //       }

    //       return el;
    //     }),
    //   };
    // }

    // case INSERT: {
    //   // eslint-disable-next-line no-lone-blocks
    //   return {
    //     items: [action.payload, ...state.items],
    //   };
    // }

    case READPOST: {
      console.log('@@@', state);
      return { ...state, read: action.payload.data };
    }

    default:
      return state;
  }
}

export default board;