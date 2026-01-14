import styled from "styled-components";

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  gap: 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const LoaderBarWrapper = styled.div`
  width: 50px;
  --b: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #9dc888) content-box;
  -webkit-mask: repeating-conic-gradient(
      #9dc888 0deg,
      #9dc888 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l4 1s infinite steps(10);
  @keyframes l4 {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const FactWrapper = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 30px;
`;

export const FactText = styled.span`
  color: #1f3d2b;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.3px;
  opacity: 0.85;

  animation: fade 1.5s ease-in-out infinite alternate;

  @keyframes fade {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }
`;
