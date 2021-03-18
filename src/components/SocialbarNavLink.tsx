import Utils from '@/lib/utils'

type SocialbarNavLinkProps = JSX.IntrinsicElements['a'] & {
  site: 'behance' | 'email' | 'github' | 'linkedin' | 'telegram' | 'whatsapp'
}

const SocialbarNavLink = ({
  className = '',
  site,
  ...htmlAnchorProps
}: SocialbarNavLinkProps) => {
  let name
  let href
  let path

  switch (site) {
    case 'behance':
      name = 'Behance'
      href = 'https://www.behance.net/cammarin'
      path =
        'M9.984,11.325a2.731,2.731,0,0,0,1.742-2.664c0-2.542-1.893-3.161-4.079-3.161H1.632V18.259H7.817c2.318,0,4.5-1.113,4.5-3.7a3.074,3.074,0,0,0-2.329-3.229ZM4.436,7.678H7.068c1.011,0,1.922.284,1.922,1.458,0,1.084-.709,1.519-1.71,1.519H4.436Zm3,8.414h-3V12.578H7.493c1.234,0,2.016.515,2.016,1.821,0,1.289-.933,1.693-2.074,1.693ZM20.341,7.426H15.168V6.17h5.173V7.426Zm2.027,6.347c0-2.732-1.6-5.011-4.5-5.011a4.642,4.642,0,0,0-4.727,4.889A4.5,4.5,0,0,0,17.872,18.5,4.119,4.119,0,0,0,22.2,15.393h-2.24a2.1,2.1,0,0,1-2,1.206,2.089,2.089,0,0,1-2.268-2.351h6.664C22.358,14.1,22.368,13.935,22.368,13.773ZM15.687,12.65a1.983,1.983,0,0,1,2.106-1.973,1.892,1.892,0,0,1,2.023,1.973Z'

      break

    case 'email':
      name = 'Email'
      href = 'mailto:cammarin@gmail.com'
      path =
        'M18.909,4.227H5.091A2.594,2.594,0,0,0,2.5,6.818V17.182a2.594,2.594,0,0,0,2.591,2.591H18.909A2.594,2.594,0,0,0,21.5,17.182V6.818A2.594,2.594,0,0,0,18.909,4.227ZM5.091,5.955H18.909a.856.856,0,0,1,.765.482L12,11.809,4.326,6.437A.856.856,0,0,1,5.091,5.955Zm13.818,12.09H5.091a.864.864,0,0,1-.864-.863v-8.7l7.278,5.094a.863.863,0,0,0,.99,0l7.278-5.094v8.7A.864.864,0,0,1,18.909,18.045Z'

      break

    case 'github':
      name = 'GitHub'
      href = 'https://github.com/cammarin'
      path =
        'M12,2a10,10,0,0,0-3.16,19.489c.5.092.683-.217.683-.482,0-.237-.009-.866-.014-1.7-2.782.6-3.368-1.34-3.368-1.34A2.646,2.646,0,0,0,5.029,16.5c-.908-.621.069-.608.069-.608A2.1,2.1,0,0,1,6.63,16.926a2.128,2.128,0,0,0,2.91.83,2.134,2.134,0,0,1,.635-1.336c-2.221-.253-4.555-1.111-4.555-4.943A3.864,3.864,0,0,1,6.649,8.794a3.6,3.6,0,0,1,.1-2.647s.84-.269,2.75,1.026a9.467,9.467,0,0,1,5.007,0c1.909-1.295,2.747-1.026,2.747-1.026a3.591,3.591,0,0,1,.1,2.647,3.859,3.859,0,0,1,1.028,2.683c0,3.842-2.338,4.687-4.566,4.935a2.386,2.386,0,0,1,.679,1.852c0,1.336-.012,2.415-.012,2.743,0,.267.18.578.687.481A10,10,0,0,0,12,2Z'

      break

    case 'linkedin':
      name = 'LinkedIn'
      href = 'https://www.linkedin.com/in/cammarin'
      path =
        'M19.714,3H4.282A1.292,1.292,0,0,0,3,4.3V19.7A1.292,1.292,0,0,0,4.282,21H19.714A1.3,1.3,0,0,0,21,19.7V4.3A1.3,1.3,0,0,0,19.714,3ZM8.44,18.429H5.772V9.838H8.444v8.591ZM7.106,8.665A1.547,1.547,0,1,1,8.653,7.118,1.547,1.547,0,0,1,7.106,8.665Zm11.335,9.764H15.773V14.25c0-1-.02-2.278-1.386-2.278-1.391,0-1.6,1.085-1.6,2.206v4.251H10.116V9.838h2.559v1.174h.036a2.812,2.812,0,0,1,2.527-1.387c2.7,0,3.2,1.78,3.2,4.1Z'

      break

    case 'telegram':
      name = 'Telegram'
      href = 'https://t.me/cammarin'
      path =
        'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.635,6.8c-.15,1.581-.8,5.418-1.133,7.189-.14.75-.416,1-.683,1.026-.581.053-1.022-.384-1.584-.753-.88-.577-1.378-.936-2.232-1.5-.987-.651-.347-1.008.215-1.593.148-.153,2.706-2.48,2.756-2.691a.2.2,0,0,0-.047-.177.23.23,0,0,0-.207-.02q-.132.03-4.218,2.788a1.9,1.9,0,0,1-1.084.4A7.163,7.163,0,0,1,6.863,13.1c-.626-.2-1.124-.311-1.08-.657q.033-.27.744-.553,4.373-1.9,5.831-2.512c2.777-1.155,3.355-1.355,3.731-1.362a.662.662,0,0,1,.387.116.42.42,0,0,1,.142.271A1.734,1.734,0,0,1,16.635,8.8Z'

      break

    case 'whatsapp':
      name = 'WhatsApp'
      href = 'https://wa.me/qr/5NTSSBEAOWFQI1'
      path =
        'M19.071,4.935A10.01,10.01,0,0,0,3.32,17.011L1.9,22.2l5.305-1.392a10.01,10.01,0,0,0,4.783,1.218h0A10.012,10.012,0,0,0,19.071,4.935Zm-7.079,15.4h0a8.309,8.309,0,0,1-4.234-1.16l-.3-.18L4.3,19.819l.84-3.07-.2-.314a8.318,8.318,0,1,1,7.047,3.9Zm4.563-6.23c-.25-.125-1.48-.73-1.709-.814s-.4-.125-.563.125-.645.814-.791.981-.292.188-.542.063a6.858,6.858,0,0,1-2.011-1.242,7.527,7.527,0,0,1-1.391-1.732c-.146-.25-.016-.386.109-.51s.25-.292.375-.438a1.714,1.714,0,0,0,.251-.417.465.465,0,0,0-.021-.439C10.2,9.555,9.7,8.324,9.491,7.824s-.409-.422-.563-.43-.313-.008-.479-.008a.918.918,0,0,0-.667.312,2.809,2.809,0,0,0-.875,2.087,4.857,4.857,0,0,0,1.021,2.586A11.142,11.142,0,0,0,12.2,16.147a14.193,14.193,0,0,0,1.425.527,3.423,3.423,0,0,0,1.575.1,2.574,2.574,0,0,0,1.688-1.189,2.08,2.08,0,0,0,.146-1.189C16.971,14.291,16.805,14.228,16.555,14.1Z'

      break
  }

  return (
    <li className="mr-0.5">
      <a
        className={Utils.minifyString(`
          ${className}
          block
          p-1
        `)}
        href={href}
        aria-label={name}
        {...htmlAnchorProps}
      >
        <svg
          className="w-6 h-6 sm-base:w-8 sm-base:h-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          focusable="false"
          role="img"
          aria-hidden="true"
        >
          <title>{name}</title>
          <path fill="currentColor" d={path}></path>
        </svg>
      </a>
    </li>
  )
}

export default SocialbarNavLink
