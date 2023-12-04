import styled from "styled-components";

export const StyledEcoSystemContentSection = styled.section`
  /* Your existing styles for larger screens */

  @media (max-width: auto) {
    /* Mobile styles */

    .grid {
      grid-template-columns: 1fr;
    }

    .xl\\:max-w-7xl {
      padding: 0 16px;
    }

    .font-marco {
      font-size: 24px;
    }

    .mt-4 {
      margin-top: 16px;
    }

    .mb-6 {
      margin-bottom: 16px;
    }

    .text-center {
      text-align: center;
    }

    .xl\\:my-6 {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    .xl\\:my-12 {
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
`;

export const StyledLoreContentHeading = styled.h2`
  /* Your existing styles for larger screens */

  @media (max-width: auto) {
    /* Mobile styles */

    font-size: 20px;
  }
`;

export const StyledLoreContentDesc = styled.p`
  /* Your existing styles for larger screens */

  @media (max-width: auto) {
    /* Mobile styles */

    font-size: 14px;
  }
`;

export const StyledGameItemCTA = styled.button`
  /* Your existing styles for larger screens */

  @media (max-width: auto) {
    /* Mobile styles */

    font-size: 14px;
    padding: 8px 12px;
  }
`;

// Add similar styles for other components if needed
