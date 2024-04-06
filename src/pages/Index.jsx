import React, { useState } from "react";
import { Box, Heading, VStack, HStack, Text, Button, Select, Textarea, useToast } from "@chakra-ui/react";
import { FaCog, FaRobot, FaPlay } from "react-icons/fa";

const BACKEND_OPTIONS = [
  { value: "openai", label: "OpenAI" },
  { value: "azure", label: "Azure Cognitive Services" },
  { value: "google", label: "Google Cloud AI" },
];

const Index = () => {
  const [selectedBackend, setSelectedBackend] = useState(BACKEND_OPTIONS[0].value);
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const toast = useToast();

  const handleBackendChange = (e) => {
    setSelectedBackend(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    try {
      // TODO: Integrate with selected backend AI service
      // Simulating processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Processing complete",
        description: "The AI backend has finished processing the input.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while processing the input.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsProcessing(false);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard <FaRobot />
      </Heading>
      <VStack spacing={6} align="stretch">
        <HStack>
          <Text fontWeight="bold">Select Backend:</Text>
          <Select value={selectedBackend} onChange={handleBackendChange}>
            {BACKEND_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </HStack>
        <Box>
          <Text fontWeight="bold" mb={2}>
            Input:
          </Text>
          <Textarea value={inputText} onChange={handleInputChange} placeholder="Enter input for AI processing" rows={6} />
        </Box>
        <Button leftIcon={<FaPlay />} colorScheme="blue" onClick={handleProcess} isLoading={isProcessing} loadingText="Processing...">
          Process with AI
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
