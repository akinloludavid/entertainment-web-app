import React, { ChangeEvent } from "react";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface ISearchInput extends InputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const GlobalSearchInput = ({ value, placeholder, onChange }: ISearchInput) => {
  return (
    <InputGroup
      w={["100%", "381px"]}
      sx={{
        "@media (max-width:360px)": {
          w: "100%",
        },
      }}
    >
      <InputLeftElement
        children={
          <Icon
            mb={["8px", "15px"]}
            as={FaSearch}
            fontSize={["16px", "18px"]}
            color={"#fff"}
          />
        }
      />
      <Input
        variant={"search"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default GlobalSearchInput;
