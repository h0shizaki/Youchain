import { NextPageWithLayout } from "@/utils/types";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useSignInRedirect } from "@/hooks/useSignInRedirect";
import { useAuthStore } from "@/stores/auth";
import styled from "styled-components";
import { Text } from "@/components/lib/Text";
import { useState } from "react";

const Button = styled.header`
  button {
    background: #000;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 10rem;
    cursor: pointer;
  }
`;

const HomePage: NextPageWithLayout = () => {
  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const logOut = useAuthStore((store) => store.logOut);
  const { requestAuthentication } = useSignInRedirect();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      <div
        id="stage"
        className="-z-10 fixed m-4 top-0 rounded-3xl bottom-0 left-0 right-0 overflow-hidden System-background-secondary"
      >
        <div
          id="navigation"
          className="m-4 z-40 fixed space-x-4 right-4 HStack"
        >

          {signedIn ? (
            <>
              <div onClick={toggleDropdown}>
                <div className="VStack rounded-3xl p-3 System-background-grey-5 Label hover: System-background-secondary">
                  <div className="HStack gap-2">
                    <img
                      src="#"
                      alt="profile"
                      className="w-6 h-6 rounded-full"
                    />
                    <p>{accountId}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 pt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="">
                    {" "}
                    {isDropdownOpen && (
                      <div className=" VStack mt-4">
                        <div className="HStack rounded-2xl p-4 gap-2 hover:System-background-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                          <button
                            type="button"
                            // onClick={logOut}
                            className="Label text-left"
                          >
                            Profile
                          </button>
                        </div>
                        <div className="HStack rounded-2xl p-4 gap-2 hover:System-background-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <button
                            type="button"
                            // onClick={logOut}
                            className="Label text-left"
                          >
                            Recently watched
                          </button>
                        </div>

                        <div className="HStack rounded-2xl p-4 gap-2 hover:System-background-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>

                          <button
                            type="button"
                            // onClick={logOut}
                            className="Label text-left"
                          >
                            Status
                          </button>
                        </div>
                        <div className="HStack rounded-2xl p-4 gap-2 hover:System-background-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>

                          <button
                            type="button"
                            // onClick={logOut}
                            className="Label text-left"
                          >
                            Setting
                          </button>
                        </div>
                        <div className="HStack rounded-2xl p-4 gap-2 hover:System-background-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            />
                          </svg>

                          <button
                            type="button"
                            onClick={logOut}
                            className="Label text-left"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => requestAuthentication()}
                className="z-50 Label Button System-background-grey-5"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => requestAuthentication(true)}
                className="z-50 Label Button System-background-grey-5"
              >
                Create Account
              </button>
            </>
          )}
        </div>
      </div>

      <div
        id="safe-area"
        className="-z-20 fixed top-0 bottom-0 left-0 right-0 overflow-hidden bg-black"
      >
        <div
          id="panel"
          className="VStack rounded-lg gap-1 p-4 m-4 w-1/5 top-0 bottom-0 left-0 right-0 absolute -z-10 System-background Label"
        >
          <a href="">Home</a>
          <a href="">Short</a>
          <a href="">Subscriptions</a>
        </div>
      </div>
    </>
  );
};

// HomePage.getLayout = useDefaultLayout;

export default HomePage;
