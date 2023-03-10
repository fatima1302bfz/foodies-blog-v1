export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      title: 'Usernam',
      name: 'username',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'string',
    },
    {
      title: 'Comment',
      name: 'comment',
      type: 'text',
    },
    {
      name: 'post',
      type: 'reference',
      to: [{
        type: 'post'}],
    },
  ],
}
