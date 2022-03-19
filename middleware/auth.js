export default function ({ store, redirect }) {
  if (!store.state.user.firstName) {
    return redirect('/')
  }
}
