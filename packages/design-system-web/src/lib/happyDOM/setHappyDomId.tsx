export const setHappyDomId = (component: { _happy_dom_id?: string }) => {
  // @ts-ignore
  if (window.happyDOM) {
    component._happy_dom_id = generateUID();
  }
};
function generateUID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  const f = ('000' + firstPart.toString(36)).slice(-3);
  const s = ('000' + secondPart.toString(36)).slice(-3);
  return f + s;
}
