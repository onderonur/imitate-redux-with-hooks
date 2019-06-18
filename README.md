### Using Redux Without Redux

This is an example to create a simple redux style architecture.
Of course it lacks a lot of other features you get by using Redux (e.g. Redux DevTools, Time Travel etc.) but if you are looking for just a global store you can get it by using React Hooks and React's Context API.

Thanks to [this](https://www.robinwieruch.de/redux-with-react-hooks/) great article of [Robin Wieruch](https://www.robinwieruch.de/), he has already shown the way to create such a project.

The only minor differences are that I used [immer](https://github.com/immerjs/immer) for immutability and I've created 2 simple hooks to mimic Redux's new `useDispatch` and `useSelector` hooks.
