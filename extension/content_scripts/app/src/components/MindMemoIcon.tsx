import React from "react";
import styled from "styled-components";

const MindMemoIconWrapper = styled.div`
    cursor: pointer;
    background: #90DFAA;
    height: 96px;
    width: 96px;
    border-radius: 16px;
    padding: 12px 16px;
`;

interface MindMemoIconProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MindMemoIcon: React.FC<MindMemoIconProps> = ({ setIsOpen }) => {
    return (
        <MindMemoIconWrapper id="content-script-root" onClick={(e) => setIsOpen(prev => !prev)}>
            <svg width="60" height="72" viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M49.561 72C49.3674 71.9999 49.1802 71.9306 49.0334 71.8047C48.8865 71.6788 48.7896 71.5045 48.7601 71.3134C47.0579 60.1783 46.3187 52.1666 48.2414 49.2586C48.5996 48.7194 48.9822 48.1575 49.381 47.5714C52.6103 42.8304 57.0215 36.357 56.7426 27.3219C56.339 14.239 46.1679 3.83248 33.5846 3.63009C26.3689 3.48436 19.3802 6.21754 14.4438 11.0686C10.4299 15.0145 8.18785 20.0486 8.12301 25.2542L8.97897 29.5418C9.00978 29.6954 8.99513 29.8546 8.93682 30.0001L3.63245 43.3L6.50349 43.3097C8.28836 43.3097 9.74252 44.7621 9.74252 46.5481V57.0841C9.74252 57.9714 10.4639 58.6919 11.3523 58.6919H20.4031C21.9919 58.6919 23.3374 59.8286 23.6017 61.3943L25.1563 70.5994C25.192 70.8111 25.142 71.0283 25.0173 71.2032C24.8927 71.3781 24.7036 71.4964 24.4917 71.532C24.2801 71.565 24.0639 71.5141 23.8894 71.39C23.7149 71.266 23.596 71.0787 23.5579 70.8682L22.0032 61.6631C21.9402 61.2852 21.745 60.9419 21.4523 60.6943C21.1596 60.4467 20.7883 60.3109 20.4048 60.3111H11.3539C9.57068 60.3111 8.12138 58.8636 8.12138 57.0841V46.5481C8.12138 45.6559 7.39349 44.9289 6.50024 44.9289L2.43604 44.9143C2.30389 44.9139 2.17384 44.8813 2.05722 44.8192C1.9406 44.7571 1.84095 44.6675 1.76694 44.5581C1.69294 44.4487 1.64683 44.323 1.63262 44.1917C1.61842 44.0605 1.63656 43.9278 1.68546 43.8052L7.34162 29.6244L6.51646 25.4874C6.50536 25.4336 6.49993 25.3788 6.50024 25.3239C6.54564 19.6567 8.96276 14.1839 13.3058 9.91413C18.5486 4.75866 25.928 1.88947 33.6106 2.01091C47.0579 2.22788 57.9309 13.3225 58.3621 27.2717C58.6572 36.8346 54.0742 43.5591 50.7298 48.4684C50.3245 49.061 49.9484 49.6164 49.5934 50.1507C47.6205 53.1333 49.5415 65.7014 50.3618 71.0673C50.3796 71.1827 50.3722 71.3005 50.3401 71.4127C50.308 71.5249 50.252 71.6289 50.1759 71.7174C50.0999 71.806 50.0055 71.8771 49.8994 71.9259C49.7933 71.9747 49.6778 71.9999 49.561 72Z"
                    fill="white"
                />
                <path
                    d="M22.7122 71.6454C22.5203 71.6453 22.3347 71.5772 22.1884 71.4533C22.042 71.3294 21.9444 71.1576 21.913 70.9686L20.4053 61.9303H11.3545C10.0679 61.929 8.83432 61.4181 7.9244 60.5096C7.01448 59.601 6.50251 58.3691 6.5008 57.0841V46.5481H2.43335C2.03384 46.5486 1.64036 46.4508 1.28774 46.2632C0.935116 46.0756 0.634239 45.8041 0.411741 45.4727C0.189243 45.1412 0.0519876 44.7601 0.0121264 44.3631C-0.0277348 43.9661 0.0310282 43.5653 0.183212 43.1964L5.6578 29.469L4.89587 25.6445C4.87966 19.3216 7.46862 13.3808 12.1715 8.76128C17.7158 3.31112 25.5168 0.250874 33.6387 0.391743C47.955 0.623286 59.5283 12.4077 59.9855 27.2216C60.2967 37.3107 55.5419 44.2877 52.0711 49.3816C51.6771 49.9581 51.301 50.5118 50.9492 51.0429C49.2292 53.6433 50.9476 64.6878 51.7728 69.9954L51.8846 70.7143C51.911 70.9236 51.8546 71.1348 51.7274 71.3031C51.6002 71.4715 51.4123 71.5836 51.2036 71.6156C50.995 71.6477 50.782 71.5972 50.6101 71.4748C50.4381 71.3525 50.3207 71.1679 50.2829 70.9605L50.1711 70.2448C48.8936 62.0339 47.6923 53.0329 49.5972 50.1524C49.9522 49.6148 50.3332 49.0546 50.7304 48.4717C54.0764 43.5623 58.6594 36.8362 58.3643 27.2734C57.9331 13.3225 47.0601 2.22627 33.6111 2.01092C25.9302 1.8992 18.5459 4.76839 13.308 9.91576C8.91792 14.2293 6.5008 19.7588 6.5008 25.4858L7.29515 29.388C7.32596 29.5416 7.31132 29.7008 7.253 29.8462L1.68601 43.8052C1.63282 43.9282 1.61124 44.0626 1.62321 44.196C1.63518 44.3295 1.68034 44.4579 1.75457 44.5695C1.82881 44.6811 1.92977 44.7724 2.04831 44.8352C2.16684 44.898 2.2992 44.9302 2.43335 44.9289H6.5008C7.39404 44.9289 8.12194 45.6559 8.12194 46.5481V57.0841C8.12194 58.8636 9.57124 60.3111 11.3529 60.3111H20.4037C21.1981 60.3111 21.8708 60.8794 22.0038 61.6631L23.5114 70.703C23.5307 70.8189 23.5245 70.9377 23.4932 71.051C23.462 71.1643 23.4064 71.2694 23.3303 71.3591C23.2543 71.4487 23.1596 71.5208 23.0528 71.5702C22.9461 71.6197 22.8299 71.6453 22.7122 71.6454Z"
                    fill="#4159A5"
                />
                <path
                    d="M32.756 46.5944C43.1295 46.5944 51.5389 38.1952 51.5389 27.8343C51.5389 17.4733 43.1295 9.0741 32.756 9.0741C22.3825 9.0741 13.9731 17.4733 13.9731 27.8343C13.9731 38.1952 22.3825 46.5944 32.756 46.5944Z"
                    fill="#5C73BC"
                />
                <path
                    d="M32.7568 45.0107C42.2557 45.0107 49.9561 37.3196 49.9561 27.8322C49.9561 18.3449 42.2557 10.6538 32.7568 10.6538C23.258 10.6538 15.5576 18.3449 15.5576 27.8322C15.5576 37.3196 23.258 45.0107 32.7568 45.0107Z"
                    fill="#4159A5"
                />
                <path
                    d="M32.7557 42.3917C40.8066 42.3917 47.3332 35.873 47.3332 27.8318C47.3332 19.7906 40.8066 13.272 32.7557 13.272C24.7048 13.272 18.1782 19.7906 18.1782 27.8318C18.1782 35.873 24.7048 42.3917 32.7557 42.3917Z"
                    fill="white"
                />
                <path
                    d="M33.3026 12.6397C33.3026 12.339 33.0581 12.0948 32.757 12.0948C32.456 12.0948 32.2115 12.339 32.2115 12.6397V14.4018C32.2115 14.7025 32.456 14.9467 32.757 14.9467C33.0581 14.9467 33.3026 14.7025 33.3026 14.4018V12.6397ZM25.6216 14.4037C25.4701 14.1431 25.1381 14.0556 24.8772 14.205C24.6163 14.3563 24.5287 14.6879 24.6783 14.9485L25.5595 16.4737C25.711 16.7343 26.043 16.8218 26.3039 16.6724C26.5648 16.5211 26.6524 16.1895 26.5028 15.9289L25.6216 14.4037ZM19.8544 19.7666C19.5935 19.6171 19.2615 19.7064 19.1137 19.967C18.9641 20.2276 19.0535 20.5592 19.3144 20.7068L20.8415 21.587C21.1024 21.7364 21.4344 21.6471 21.5822 21.3865C21.7318 21.126 21.6424 20.7943 21.3815 20.6467L19.8544 19.7666ZM17.5465 27.287C17.2455 27.287 17.001 27.5312 17.001 27.8319C17.001 28.1325 17.2455 28.3767 17.5465 28.3767H19.3107C19.6118 28.3767 19.8563 28.1325 19.8563 27.8319C19.8563 27.5312 19.6118 27.287 19.3107 27.287H17.5465ZM19.3107 34.9587C19.0498 35.11 18.9623 35.4416 19.1119 35.7022C19.2633 35.9628 19.5954 36.0503 19.8563 35.9008L21.3833 35.0207C21.6442 34.8694 21.7318 34.5378 21.5822 34.2772C21.4308 34.0166 21.0987 33.9292 20.8378 34.0786L19.3107 34.9587ZM24.6801 40.7171C24.5287 40.9776 24.6181 41.3093 24.879 41.4605C25.1399 41.6118 25.472 41.5225 25.6234 41.2619L26.5046 39.7367C26.656 39.4761 26.5666 39.1445 26.3057 38.9932C26.0448 38.842 25.7128 38.9313 25.5614 39.1918L24.6801 40.7171ZM32.2115 43.024C32.2115 43.3247 32.456 43.5689 32.757 43.5689C33.0581 43.5689 33.3026 43.3247 33.3026 43.024V41.2619C33.3026 40.9612 33.0581 40.7171 32.757 40.7171C32.456 40.7171 32.2115 40.9612 32.2115 41.2619V43.024ZM39.8907 41.2619C40.0421 41.5225 40.3742 41.61 40.6351 41.4605C40.896 41.3093 40.9836 40.9776 40.834 40.7171L39.9527 39.1918C39.8013 38.9313 39.4693 38.8438 39.2084 38.9932C38.9475 39.1445 38.8599 39.4761 39.0095 39.7367L39.8907 41.2619ZM45.656 35.899C45.9169 36.0503 46.249 35.961 46.4004 35.7004C46.5518 35.4398 46.4624 35.1082 46.2015 34.9569L44.6745 34.0768C44.4136 33.9255 44.0815 34.0148 43.9301 34.2754C43.7786 34.536 43.868 34.8676 44.1289 35.0189L45.656 35.899ZM47.9658 28.3767C48.2668 28.3767 48.5113 28.1325 48.5113 27.8319C48.5113 27.5312 48.2668 27.287 47.9658 27.287H46.2015C45.9005 27.287 45.656 27.5312 45.656 27.8319C45.656 28.1325 45.9005 28.3767 46.2015 28.3767H47.9658ZM46.1997 20.7068C46.4606 20.5574 46.55 20.2258 46.4004 19.967C46.2508 19.7064 45.9187 19.6171 45.6597 19.7666L44.1326 20.6467C43.8717 20.7961 43.7823 21.1278 43.9319 21.3865C44.0815 21.6471 44.4136 21.7364 44.6726 21.587L46.1997 20.7068ZM40.8321 14.9485C40.9836 14.6879 40.8942 14.3563 40.6333 14.205C40.3724 14.0538 40.0403 14.1431 39.8889 14.4037L39.0077 15.9289C38.8562 16.1895 38.9456 16.5211 39.2065 16.6724C39.4674 16.8236 39.7995 16.7343 39.9509 16.4737L40.8321 14.9485Z"
                    fill="#4159A5"
                />
                <path
                    d="M34.6118 28.8916C34.4445 28.7237 34.171 28.7232 34.0029 28.8904C33.8349 29.0575 33.8343 29.3307 34.0017 29.4985L38.0896 33.5978C38.2569 33.7656 38.5304 33.7662 38.6985 33.599C38.8665 33.4318 38.8671 33.1587 38.6997 32.9908L34.6118 28.8916ZM32.4822 25.4959C32.4817 25.733 32.6736 25.9254 32.9122 25.9271C33.1496 25.9276 33.3422 25.736 33.344 25.4976L33.3563 19.3436C33.3568 19.1065 33.1649 18.9142 32.9263 18.9124C32.6889 18.9119 32.4963 19.1035 32.4945 19.3419L32.4822 25.4959Z"
                    fill="#D0063E"
                />
                <path
                    d="M34.9241 30.0898C36.1218 28.8935 36.1217 26.9541 34.9241 25.7579C33.7264 24.5617 31.7846 24.5618 30.587 25.758C29.3893 26.9542 29.3894 28.8937 30.587 30.0898C31.7847 31.286 33.7265 31.286 34.9241 30.0898Z"
                    fill="#4159A5"
                />
                <path
                    d="M33.1352 29.9C34.2498 29.7195 35.0068 28.6706 34.826 27.5574C34.6453 26.4441 33.5952 25.688 32.4806 25.8686C31.366 26.0492 30.609 27.098 30.7897 28.2113C30.9705 29.3245 32.0206 30.0806 33.1352 29.9Z"
                    fill="#5C73BC"
                />
            </svg>
        </MindMemoIconWrapper>
    )
}

export default MindMemoIcon;