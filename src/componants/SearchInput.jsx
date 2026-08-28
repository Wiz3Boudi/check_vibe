import { Search } from "lucide-react";
import styled from "styled-components";

export default function SearchInput(){
    return(
        <Container>
            <input type="search" placeholder={placeholder || 'Search type keywords'} />
        </Container>
    )
}