import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width:100%;
  background-color: #D2B48C;
  background-image: url('/placeholder.svg?height=1080&width=1920');
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 2rem;


  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #3E2722;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: ;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #C2B280;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
  background-color: #FFFFFF;
  color: #333333;

  &:focus {
    outline: none;
    border-color: #008080;
  }
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #78866B;
`;

export const Button = styled.button`
  background-color: #008080;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006666;
  }

  &:disabled {
    background-color: #C2B280;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: #D32F2F;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #3E2723;

  a {
    color: #008080;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #C2B280;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
  background-color: #FFFFFF;
  color: #333333;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #008080;
  }
`;
export const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  background-color: #e6ffe6; /* Light green background */
  color: #2e7d32; /* Green text */
  font-size: 1rem;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

